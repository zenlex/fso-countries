import Weather from "./Weather"
import { useCountry } from "../hooks";

const ShortCountry = ({ name, clickHandle }) => {
  return (<div>
    {name}  <button onClick={clickHandle}>show</button>
  </div>)
};

const Country = ({ results, showClickHandle }) => {
  const countryData = useCountry(results)
  if (results.length === 0) return (<div>not found...</div>)
  if (results.length > 1) {
    return (
      <div>
        {
          results.map(country =>
            <ShortCountry
              key={country.name.official}
              name={country.name.common}
              clickHandle={() => showClickHandle(country)}
            />
          )
        }
      </div>
    )
  }

  const flagStyle = {
    fontSize: '7em'
  }

  const coatStyle = {
    width: '300px',
    height: 'auto'
  }

  if (countryData.country) {
    console.log(countryData)
    const country = countryData.country
    const weather = countryData.weather
    console.log({ country, weather })
    return (
      <div>
        <h1>{country.name.common}</h1>
        <h2>Official Name:{country.name.official || 'N/A'}</h2>
        <h3>Capital:{country.capital || 'N/A'}</h3>
        <h3>Population: {country.population}</h3>
        <h3><span style={flagStyle}>{country.flag || 'N/A'}</span></h3>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((lang, index) => {
            return (
              <li key={lang.length * Math.random() * index}>{lang}</li>
            )
          })}
        </ul>
        {
          country.coatOfArms.png &&
          <div className='img-cont'>
            <h3>Coat of Arms:</h3>
            <img src={country.coatOfArms.png} style={coatStyle} alt="coat of arms" height='400px'></img>
          </div>
        }
        {
          weather ? <Weather weather={weather} city={country.capital} /> : ''
        }
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Country;