import getProduct from "../utils/api/productAPI";
import { useState, useEffect } from "react";
import styles from "../pages/Home.module.css"
export default function ListProduct() {
    const [product, setProduct] = useState([])
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
        prod()
    },[]);
    return (
        product.map((a,b) => <div key={b} className={styles.boxProduct}>
            <div className={styles.imgPrevContain}>
            <img src={a.image} alt={a.title} className={styles.imgPrev} />
            </div>
            <p className={styles.prodPrice}>$ {a.price}</p>
            <p className={styles.prodTitle} >{a.title}</p>
        </div>)
    )
    
    
    
    
}