async function convertCurrency() {
    try {
        const data = await fetch(process.env.REACT_APP_CONVERT_CURENCY).then(res => res.json());
        return data
    } catch (error) {
        console.log("ERROR IN: convertCurrency");
    }
}
export default convertCurrency;