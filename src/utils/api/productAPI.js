async function getProduct() {
    try {
        return await fetch(process.env.REACT_APP_API_URL).then(response => response.json());
        // console.log(data.products.map(a => a.title));\
    } catch (error) {
        console.log("found Error: ");
    }
}

export default getProduct;