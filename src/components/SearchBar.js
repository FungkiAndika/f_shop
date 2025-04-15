import styles from "./SearchBar.module.css";
import getProduct from "../api/productAPI"
import { useState, useEffect } from "react";




function SearchBar() {
    const [titles, setTitles] = useState([]);
    const [inputValue, setInputValue] = useState("")
    const handlerInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    useEffect(() => {
        async function productTitles() {
            const data = await getProduct();
            const title = data.map(a => a.title)
            setTitles(title)
        }
        productTitles()
    }, [])
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <span className="material-symbols-outlined" >search</span>
        <input type="search" className={styles.search_input} value={inputValue} onChange={handlerInputChange} placeholder="Search" />
      </div>
      <div>
        {titles.filter(a => (new RegExp(inputValue, "i")).test(a)).map((index) => inputValue === "" ? false : (<p>{index}</p>))}
      </div>
    </div>
  );
}

export default SearchBar;
