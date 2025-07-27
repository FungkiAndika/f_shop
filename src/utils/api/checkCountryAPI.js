async function checkCountry() {
    try {
        const res = await fetch(process.env.REACT_APP_COUNTRY_CHECK_API_URL)
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const country = await res.json()
        return country.countryCode
    } catch (error) {
        console.log("ERROR IN: checkCountry");
        
    }
}
export default checkCountry;