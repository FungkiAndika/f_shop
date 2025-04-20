import styles from "./SearchBar.module.css";
import getProduct from "../utils/api/productAPI";
import { useState, useEffect } from "react";

function SearchBar() {
  const [sugest, setSugest] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handlerInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value.toString());
  };
  useEffect(() => {
    async function product() {
      const data = await getProduct();
      const title = data.products.map((a) => a.title);
      const desc = data.products.map((a) => a.description);
      const category = data.products.map((a) => a.category);
      const tags = data.products.map((a) => a.tags)
      const brand = data.products.map((a) => a.brand)
      setSugest([ ...new Set([...title, ...desc, ...category, ...tags, ...brand])])
    }
    product();
  }, []);
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <span className="material-symbols-outlined icon">search</span>
        <input
          type="search"
          className={styles.search_input}
          value={inputValue}
          onChange={handlerInputChange}
          placeholder="Search"
        />
      </div>
      <div className={styles.sugestion}>
        {sugest
          .filter((a) => {
            if (!inputValue) return false;
            if (!/^[^()]+$/.test(a)) return false;
            const safeInput = escapeRegExp(inputValue);
            return new RegExp(safeInput, "i").test(a);
          })
          .map((index, id) =>
            inputValue === "" ? false : <p key={id}>{index}</p>
          )}
      </div>
    </div>
  );
}

export default SearchBar;
