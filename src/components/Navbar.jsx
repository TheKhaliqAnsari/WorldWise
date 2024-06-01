import {  NavLink } from "react-router-dom"
import styles from "./Nabar.module.css";
function Navbar() {
  return (
    <nav   className={styles.nav}>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/product'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/pricing'>Pricing</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar