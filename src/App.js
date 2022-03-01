import { useState } from 'react'
import Country from './components/Country'
import { useFetch } from './hooks';

function App() {
  const [inputName, setInputName] = useState('');
  const [results, setResults] = useState([])

  const countries = useFetch("https://restcountries.com/v3.1/all?fields=name").apiData

  const filterResults = (txt) => {
    setResults(countries.filter(country =>
      country.name.common.search(new RegExp(txt, 'i')) !== -1))
  }

  const showClickHandle = (country) => {
    setResults([country])
  }

  const handleNameChange = (event) => {
    const txt = event.target.value
    setInputName(txt);
    filterResults(txt)
  }

  return (
    <div>
      country name: <input value={inputName} onChange={handleNameChange} />
      <Country results={results} showClickHandle={showClickHandle} />
    </div>
  );
}

export default App;
