import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { IsLoggedInContextProvider } from "../../contexts/IsLoggedInContext"
import { BagItemsContextProvider } from "../../contexts/BagItemsContext"

export default function Layout() {

    return(
        <div className={styles.siteWrapper}>
            <IsLoggedInContextProvider>
                <BagItemsContextProvider>
                        <Header />
                    <main>
                        <Outlet/>
                    </main>
                </BagItemsContextProvider>
                <Footer />
            </IsLoggedInContextProvider>
        </div>
    )
}