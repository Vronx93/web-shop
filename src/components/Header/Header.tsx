import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import styles from "./Header.module.css"
import Login from "../Login/Login"
import { useIsLoggedInContext } from "../../contexts/IsLoggedInContext"
import Logout from "../Logout/Logout"
import ShoppingBag from "../ShoppingBag/ShoppingBag"

export default function Header() {
    const {isLoggedIn} = useIsLoggedInContext()
    
    return(
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>LOGO</Link>
                <Searchbar />
                {!isLoggedIn ? <Login /> : <Logout />}
                <ShoppingBag />
            </header>
        </>

    )
}