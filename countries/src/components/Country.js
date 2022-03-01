import Weather from "./Weather"


const Country = ({ country, weather }) => {

  const flagStyle = {
    fontSize: '7em'
  }

  const coatStyle = {
    width: '300px',
    height: 'auto'
  }

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
}

export default Country;