import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { isLoggedInContext } from "../../contexts/isLoggedInContext"
import { useEffect, useState } from "react"
import { BagItemsContext } from "../../contexts/bagItemsContext"

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [bagItems, setBagItems] = useState(JSON.parse(localStorage.getItem("bagItems") || "[]"))


    useEffect(() => {
        const loginStateInfo = localStorage.getItem("isLoggedIn") || null
        if(loginStateInfo) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    return(
        <div className={styles.siteWrapper}>
            <isLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
                <BagItemsContext.Provider value={{bagItems, setBagItems}}>
                        <Header />
                    <main>
                        <Outlet/>
                    </main>
                </BagItemsContext.Provider>
                <Footer />
            </isLoggedInContext.Provider>
        </div>
    )
}