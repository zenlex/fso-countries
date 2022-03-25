import { useEffect, useState } from 'react';
import Country from './components/Country';
import { useFetch, useField } from './hooks';
import { TextDiv, TextInput, Wrapper } from './components/UtilityStyles';
function App() {
  // const [inputName, setInputName] = useState('');
  const [results, setResults] = useState([]);
  const countries = useFetch(
    'https://restcountries.com/v3.1/all?fields=name'
  ).apiData;
  const inputField = useField('text');

  useEffect(() => {
    if (countries) {
      setResults(
        countries.filter(
          (country) =>
            country.name.common.search(new RegExp(inputField.value, 'i')) !== -1
        )
      );
    }
  }, [inputField.value, countries]);

  const showClickHandle = (country) => {
    setResults([country]);
  };

  return (
    <Wrapper>
      <div>
        <TextDiv>
          <h2 style={{ margin: 0 }}>Country Name:</h2>
          <TextInput {...inputField} />
        </TextDiv>
        <Country results={results} showClickHandle={showClickHandle} />
      </div>
    </Wrapper>
  );
}

export default App;
