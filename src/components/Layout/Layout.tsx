import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Layout() {
    return(
        <div className={styles.siteWrapper}>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}