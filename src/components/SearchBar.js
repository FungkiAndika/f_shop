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
      const title = data.map((a) => a.name);
      const desc = data.map((a) => a.description);
      const category = data.map((a) => a.category);
      const brand = data.map((a) => a.brand)
      setSugest([ ...new Set([...title, ...desc, ...category, ...brand])])
    }
    product();
  }, []);
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
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
