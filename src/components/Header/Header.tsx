import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import styles from "./Header.module.css"
import Login from "../Login/Login"

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>LOGO</Link>
                <Searchbar />
                <Login />
            </header>
        </>

    )
}