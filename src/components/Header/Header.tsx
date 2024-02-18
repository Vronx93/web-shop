import Searchbar from "../Searchbar/Searchbar"
import styles from "./Header.module.css"

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <h1>LOGO</h1>
                <Searchbar />
            </header>
        </>

    )
}