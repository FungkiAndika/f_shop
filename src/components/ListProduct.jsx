import getProduct from "../utils/api/productAPI";
import checkCountry from "../utils/api/checkCountryAPI";
import convertCurrency from "../features/convertCurrency";
import { useState, useEffect } from "react";
import styles from "../pages/Home.module.css"
export default function ListProduct() {
    const [product, setProduct] = useState([])
    const [userCountry, setUserCountry] = useState([])
    const [priceEx, setPriceEx] = useState([])
    const [currencyCode, setCurrencyCode] = useState([])
    useEffect(() => {
        async function prod() {
            const product = await getProduct()
            const title = product.products.map(a => Object({
                title: a.title,
                image: a.images[0],
                price: a.price
            }))
            // const image = [...new Set([...product.products.map(a => a.images).map(a => a[0])])]
            setProduct(title)
            
        }
        async function co() {
            const country = await checkCountry();
            const code = await fetch('https://gist.githubusercontent.com/tiagodealmeida/0b97ccf117252d742dddf098bc6cc58a/raw/f621703926fc13be4f618fb4a058d0454177cceb/countries.json').then(res => res.json());
            const rates = await convertCurrency();
            const countryCode = code.countries.country.filter(a => a.countryCode === country).map(a => a.currencyCode).join();
            const rate = rates.rates[countryCode]
            console.log(code);
            setCurrencyCode(countryCode)
            setPriceEx(rate)
            setUserCountry(country)
        }
        co()
        prod()
    },[]);
    console.log(priceEx);
    
    return (
        product.map((a,b) => <div key={b} className={styles.boxProduct}>
            <div className={styles.imgPrevContain}>
            <img src={a.image} alt={a.title} className={styles.imgPrev} />
            </div>
            <p className={styles.prodPrice}>{currencyCode} {Math.ceil(a.price*priceEx).toLocaleString(userCountry)}</p><br></br>
            <p className={styles.prodTitle} >{a.title}</p>
        </div>)
    )
    
    
    
    
}