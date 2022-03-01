import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import axios from 'axios';
import { useCountry } from './hooks';
axios.defaults.baseURL = "https://restcountries.com/v3.1/"
const ShortCountry = ({ name, clickHandle }) => {
  return (<div>
    {name}  <button onClick={clickHandle}>show</button>
  </div>)
};

function App() {
  const [inputName, setInputName] = useState('');
  const [countries, setCountries] = useState(['aaaa', 'aaa', 'aa']);
  const [results, setResults] = useState([])
  const [country, setCountry] = useState()
  const countryData = useCountry(country)

  useEffect(() => {
    axios
      .get('all?fields=name')
      .then(response => {
        setCountries(response.data);
      });
  }, [])

  const showClickHandle = (country) => {
    console.log(`show click handle called with ${country.name.common}`);
    setResults(countries.filter(countryObj => {
      return countryObj.name.common === country.name.common
    }
    ))
    setCountry(country)
  }

  const handleNameChange = (event) => {
    const txt = event.target.value
    setInputName(txt);
    setResults(countries.filter(country =>
      country.name.common.search(new RegExp(txt, 'i')) !== -1))
    console.log('results length:', results.length)
    if (results.length === 1) {
      setCountry(results[0])
    } else {
      setCountry('')
    }
  }
  return (
    <div>
      country name: <input value={inputName} onChange={handleNameChange} />
      <div>
        {
          results.length > 0
          && results.map(country =>
            <ShortCountry
              key={country.name.official}
              name={country.name.common}
              clickHandle={() => showClickHandle(country)}
            />)
        }
        {
          results.length === 1
          && countryData.country
          && <Country country={countryData.country} weather={countryData.weather} />
        }
      </div>
    </div>
  );
}

export default App;
