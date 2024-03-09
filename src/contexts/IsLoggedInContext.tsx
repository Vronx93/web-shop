import { ReactNode, createContext, useContext, useState } from "react";

const IsLoggedInContext = createContext<any>(false)

export function useIsLoggedInContext() {
    const context = useContext(IsLoggedInContext)

    if(context) {
        return context
    }
    throw new Error (
        "Component should be placed in IsLoggedInContextProvider"
    )
}

function useIsLoggedIn() {
    if(!localStorage.getItem("isLoggedIn")) {
        const [isLoggedIn, setIsLoggedIn] = useState(null)
        return {isLoggedIn, setIsLoggedIn}
    } else {
        const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn") || "[]"))
        return {isLoggedIn, setIsLoggedIn}
    }
}

export function IsLoggedInContextProvider({children} : {children: ReactNode}) {
    const value = useIsLoggedIn()

    return <IsLoggedInContext.Provider value={value}>{children}</IsLoggedInContext.Provider>
}