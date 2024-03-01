import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import styles from "./Header.module.css"
import Login from "../Login/Login"
import { useContext } from "react"
import { isLoggedInContext } from "../../contexts/isLoggedInContext"
import Logout from "../Logout/Logout"
import ShoppingBag from "../ShoppingBag/ShoppingBag"

export default function Header() {
    const {isLoggedIn} = useContext(isLoggedInContext)
    
    return(
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>LOGO</Link>
                <Searchbar />
                {!isLoggedIn && <Login />}
                {isLoggedIn && <Logout />}
                <ShoppingBag />
            </header>
        </>

    )
}