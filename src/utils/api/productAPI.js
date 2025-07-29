async function getProduct() {
    try {
        return await fetch(process.env.REACT_APP_PRODUCT_API_URL).then(response => response.json())
        
    } catch (error) {
        console.log("found Error: getProduct");
    }
}

export default getProduct;