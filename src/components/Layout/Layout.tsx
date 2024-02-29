import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { isLoggedInContext } from "../../contexts/isLoggedInContext"
import { useEffect, useMemo, useState } from "react"
import { BagItemsContext, BagItemsContextInterface } from "../../contexts/bagItemsContext"
import { getAllCategories } from "../../api"
import { ShopCategories } from "../../contexts/shopCategories"

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [bagItems, setBagItems] = useState(JSON.parse(localStorage.getItem("bagItems") || "[]"))
    // const [shopCategories, setShopCategories] = useState< {}[]>([])

    // useMemo(() => {
    //     getAllCategories()
    //         .then((resolvedData) => 
    //             setShopCategories(resolvedData))
    // }, [])

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
                    {/* <ShopCategories.Provider value={{shopCategories, setShopCategories}}> */}
                        <Header />
                    {/* </ShopCategories.Provider> */}
                    <main>
                        <Outlet/>
                    </main>
                </BagItemsContext.Provider>
                <Footer />
            </isLoggedInContext.Provider>
        </div>
    )
}