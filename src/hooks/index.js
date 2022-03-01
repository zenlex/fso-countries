import { useEffect, useState } from 'react'
import axios from 'axios';
const weatherAPI = axios.create(
  {
    baseURL: "http://api.weatherapi.com/v1"
  }
)

export const useCountry = (country) => {
  console.log('useCountry called with arg: ', country)
  const [apiData, setApiData] = useState()
  const [weather, setWeather] = useState();
  const name = country?.name?.common || null

  async function fetchData(url) {
    const response = await axios.get(url)
    const data = response?.data[0]
    console.log('setting ApiData: ', data)
    setApiData(data)
    fetchWeather(data.capital)
  }

  async function fetchWeather(capital) {
    console.log('fetch weather called')
    const weatherUrl = `/current.json?q=${capital}&&key=${process.env.REACT_APP_API_KEY}`
    const response = await weatherAPI.get(weatherUrl)
    console.log('setting weather: ', response.data.current)
    setWeather(response.data.current);
  }

  useEffect(() => {
    if (name) {
      const countriesUrl = `name/${name}?fullText=true`
      fetchData(countriesUrl)
    }
  }, [name])


  return {
    country: apiData,
    weather
  }
}