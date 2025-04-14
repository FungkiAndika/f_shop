import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <>
      <div className={styles.search}>
        <span class="material-symbols-outlined">search</span>
        <input type="search" placeholder="Search" />
      </div>
    </>
  );
}

export default SearchBar;
