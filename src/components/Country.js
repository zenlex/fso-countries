import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Weather from './Weather';
import { useCountry } from '../hooks';
import { Overlay, TextDiv } from './UtilityStyles';
// name and button only shown when more than one country passes filter
const ShortCountry = ({ name, clickHandle }) => {
    return (_jsxs("div", { children: [name, " ", _jsx("button", Object.assign({ onClick: clickHandle }, { children: "Show Details" }))] }));
};
// country detail view - triggered by single country left in filter or user clicks 'show'
const Country = ({ results, showClickHandle }) => {
    const countryData = useCountry(results);
    if (results.length === 0)
        return _jsx("div", { children: "not found..." });
    if (results.length > 1) {
        return (_jsx(Overlay, { children: _jsx(TextDiv, { children: results.map((country) => (_jsx(ShortCountry, { name: country.name.common, clickHandle: () => showClickHandle(country) }, country.name.official))) }) }));
    }
    const flagStyle = {
        fontSize: '7em',
    };
    const coatStyle = {
        width: '300px',
        height: 'auto',
    };
    if (countryData.country) {
        console.log(countryData);
        const country = countryData.country;
        const weather = countryData.weather;
        console.log({ country, weather });
        return (_jsxs(Overlay, { children: [_jsx("h1", { children: country.name.common }), _jsxs("h2", { children: ["Official Name:", country.name.official || 'N/A'] }), _jsxs("h3", { children: ["Capital:", country.capital || 'N/A'] }), _jsxs("h3", { children: ["Population: ", country.population] }), _jsxs("h3", { children: ["Flag:", _jsx("div", Object.assign({ style: flagStyle }, { children: country.flag || 'N/A' }))] }), _jsx("h3", { children: "Languages:" }), _jsx("ul", { children: Object.values(country.languages).map((lang, index) => {
                        return _jsx("li", { children: lang }, lang.length * Math.random() * index);
                    }) }), country.coatOfArms.png && (_jsxs("div", Object.assign({ className: 'img-cont' }, { children: [_jsx("h3", { children: "Coat of Arms:" }), _jsx("img", { src: country.coatOfArms.png, style: coatStyle, alt: 'coat of arms', height: '400px' })] }))), weather ? _jsx(Weather, { weather: weather, city: country.capital }) : ''] }));
    }
    else {
        return _jsx("div", {});
    }
};
export default Country;
