import BenefitsList from "../BenefitsList/BenefitsList"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <BenefitsList />
            </footer>        
        </>
    )
}