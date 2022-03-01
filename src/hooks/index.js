import { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.baseURL = "https://restcountries.com/v3.1/"
const weatherAPI = axios.create(
  {
    baseURL: "http://api.weatherapi.com/v1"
  }
)

export const useCountry = (results) => {
  console.log('useCountry called with arg: ', results)
  const [apiData, setApiData] = useState()
  const [weather, setWeather] = useState();

  useEffect(() => {

    const fetchWeather = async (capital) => {
      console.log('fetch weather called')
      const weatherUrl = `/current.json?q=${capital}&&key=${process.env.REACT_APP_API_KEY}`
      const response = await weatherAPI.get(weatherUrl)
      console.log('setting weather: ', response.data.current)
      setWeather(response.data.current);
    }

    const fetchData = async (url) => {
      const response = await axios.get(url)
      const data = response.data[0]
      console.log('setting ApiData: ', data)
      setApiData(data)
      fetchWeather(data.capital)
    }

    if (results && results.length === 1) {
      const name = results[0].name.common
      const countriesUrl = `name/${name}?fullText=true`
      fetchData(countriesUrl)
    } else setApiData(null)
  }, [results])


  return {
    country: apiData,
    weather
  }
}

export const useFetch = (url) => {
  const [apiData, setApiData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(url)
        .then(response => {
          setApiData(response.data);
        });
    }
    fetchData()
  }, [url])
  return {
    apiData
  }
}

export const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (e) => { setValue(e.target.value) }

  return {
    type,
    value,
    onChange
  }
}