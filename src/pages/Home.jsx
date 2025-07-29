import SearchBar from "../components/SearchBar";
import getProduct from "../utils/api/productAPI";
import ListProduct from "../components/ListProduct";
import styles from "./Home.module.css"
import { useState, useEffect } from "react";
function Home() {
    const [sortType, setSortType] = useState("none");
    const [category, setCategory] = useState([])
    // const [titles, setTitles] = useState([])
    useEffect(() => {
        async function productAPI() {
            const product = await getProduct()
            const cate = product.map(a => a.category)
            // const title = product.products.map(a => a.title)
            // const image = product.products.map(a => a.images)
            setCategory([...new Set([...cate])])
            // setTitles({
            //     titled: title,
            //     imaged: image
            // })
        }
        productAPI()
        
    }, [sortType]);
    return (
        
        <>
            <SearchBar />
            <div className={styles.cateContain}>
                <div className={styles.buttonContain}>
                    <button className={styles.category} onClick={
                        () => setSortType("none")
                    }>All</button>
                    {
                        category.map((a, b) => <button key={b} className={styles.category} onClick={() => {
                            setSortType(a)
                            
                        }
                        }>{a.charAt(0).toUpperCase() + a.slice(1)}</button>)
                    }
                </div>
            </div>
            <div className={styles.containerProduct}>
                {ListProduct(sortType)}
            </div>
        </>
    );
};


export default Home;