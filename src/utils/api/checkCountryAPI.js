async function checkCountry() {
    try {
        return await fetch(process.env.REACT_APP_COUNTRY_CHECK_API_URL).then(res => res.json()).then(country => country.country_code)
    } catch (error) {
        console.log("ERROR IN: checkCountry");
    }
}


export default checkCountry;