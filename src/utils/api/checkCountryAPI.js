async function checkCountry() {
    try {
        return await fetch(process.env.REACT_APP_COUNTRY_CHECK_API_URL).then(res => res.json()).then(country => country.countryCode)
    } catch (error) {
        console.log("ERROR IN: checkCountry");
        
    }
}
export default checkCountry;