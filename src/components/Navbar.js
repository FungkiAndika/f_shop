import styles from "./Navbar.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <Router>
      <nav className={styles.container}>
        <h1 className={styles.title}>FShop</h1>
        <ul className={styles.link_container}>
          <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/Contact">
            Contact
          </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default Navbar;
