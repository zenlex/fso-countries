import { useEffect, useState } from 'react'
import Country from './components/Country'
import { useFetch, useField } from './hooks';

function App() {
  // const [inputName, setInputName] = useState('');
  const [results, setResults] = useState([])
  const countries = useFetch("https://restcountries.com/v3.1/all?fields=name").apiData
  const inputField = useField('text')

  useEffect(() => {
    if (countries) {
      setResults(countries.filter(country =>
        country.name.common.search(new RegExp(inputField.value, 'i')) !== -1))
    }
  }, [inputField.value, countries])

  const showClickHandle = (country) => {
    setResults([country])
  }

  return (
    <div>
      country name: <input {...inputField} />
      <Country results={results} showClickHandle={showClickHandle} />
    </div>
  );
}

export default App;
