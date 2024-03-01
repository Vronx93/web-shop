import Faq from "../Faq/Faq"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <p>Footer</p>
                <Faq />
            </footer>        
        </>
    )
}