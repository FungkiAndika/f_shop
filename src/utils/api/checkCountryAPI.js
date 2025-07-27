async function checkCountry() {
    try {
        const res = await fetch(process.env.REACT_APP_COUNTRY_CHECK_API_URL)
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const country = res.json()
        return country.country_code
    } catch (error) {
        console.log("ERROR IN: checkCountry");
        
    }
}
export default checkCountry;