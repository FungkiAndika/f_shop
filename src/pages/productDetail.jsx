async function getProduct() {
    try {
        const f = await fetch("https://dummyjson.com/products/").then(response => response.json());
        console.log(f.products.map(a => a.title.split(" ").join("-")));
        
        // console.log(data.products.map(a => a.title));\
    } catch (error) {
        console.log("found Error: ");
    }
}
getProduct()