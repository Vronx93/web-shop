import { useContext } from "react"
import styles from "./Logout.module.css"
import { isLoggedInContext } from "../../contexts/isLoggedInContext"

export default function Logout() {
    const {setIsLoggedIn} = useContext(isLoggedInContext)
    function handleLogoutClick() {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
    }
    return(
        <button 
            className={styles.logoutBtn}
            onClick={handleLogoutClick}
        >
                Log out
        </button>
    )
}