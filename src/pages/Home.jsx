import SearchBar from "../components/SearchBar";
import getProduct from "../utils/api/productAPI";
import ListProduct from "../components/ListProduct";
import GroceriesSvg from "../img/svg"
import styles from "./Home.module.css"
import { useState, useEffect } from "react";
import { useRef } from "react";
function Home() {
    const [sortType, setSortType] = useState("none");
    const [category, setCategory] = useState([])
    // const [titles, setTitles] = useState([])
    const topImagePrev = useRef(null)
    useEffect(() => {
        async function productAPI() {
            const product = await getProduct()
            const cate = product.products.map(a => a.category)
            // const title = product.products.map(a => a.title)
            // const image = product.products.map(a => a.images)
            setCategory([...new Set([...cate])])
            // setTitles({
            //     titled: title,
            //     imaged: image
            // })
        }
        productAPI()
        console.log(sortType);
        
    }, [sortType]);
    return (
        
        <>
            <SearchBar />
            <div className={styles.cateContain}>
                <div className={styles.prevImageDin} ref={topImagePrev}><svg xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 -960 960 960" width="200px" fill="#ffffff" ><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg></div>
                <div className={styles.buttonContain}>
                    <button className={styles.category} onClick={
                        () => setSortType("none")
                    }>All</button>
                    {
                        category.map((a, b) => <button key={b} className={styles.category} onClick={() => {
                            topImagePrev.current.innerHTML = GroceriesSvg({ a })
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