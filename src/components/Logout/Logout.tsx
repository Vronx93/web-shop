import styles from "./Logout.module.css"
import { useIsLoggedInContext } from "../../contexts/IsLoggedInContext"

export default function Logout() {
    const {setIsLoggedIn} = useIsLoggedInContext()
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