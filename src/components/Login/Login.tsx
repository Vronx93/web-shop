import { useContext, useEffect, useState } from "react"
import styles from "./Login.module.css"
import { LoginUser } from "../../api"
import { isLoggedInContext } from "../../contexts/isLoggedInContext"

//add if logged in show Log out instead of Log in, add register
export type FormData = {
    username: string,
    password: string
}

export default function Login() {
    const [isLoginVisible, setIsLoginVisible] = useState(false)
    const [formData, setFormData] = useState<FormData>({username: "kminchelle", password: "0lelplR"})
    const [errorMessage, setErrorMessage] = useState<string | null >(null)
    const {setIsLoggedIn} = useContext(isLoggedInContext)

    function handleInputChange(e : any) {
            if(e?.target?.id === "username") {
                setFormData(prevFormData => ({...prevFormData, username: e?.target?.value}))
            } else if(e?.target?.id === "password") {
                setFormData(prevFormData => ({...prevFormData, password: e?.target?.value}))
            }
        }
    
    async function handleLoginFormSubmit(e : any) {
        e.preventDefault()
        try{
            await LoginUser({formData})
            setIsLoggedIn(true)
            localStorage.setItem("isLoggedIn", "true")
            console.log("Logged In")
        } catch(error : any) {
            setErrorMessage(error.message)
        }       
    }

    function handleCloseForm() {
        setIsLoginVisible(false)
        setErrorMessage(null)
    }

    return(
        <div className={styles.loginContainer}>
            <button className={styles.loginBtn} onClick={() => setIsLoginVisible(true)}>Log in</button> 
            {
                isLoginVisible &&
                <div className={styles.formContainer}>
                    <form method="post" className={styles.loginForm} onSubmit={(e) => handleLoginFormSubmit(e)}>
                        <button 
                            type="button" 
                            className={styles.closeBtn}
                            onClick={handleCloseForm}
                        >
                            <img src="../../src/assets/images/close-btn.svg" alt="Closing symbol" />
                        </button>
                        {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
                        <div className={styles.inputContainer}>
                            <label htmlFor="username">Username</label>
                            <input 
                                onChange={(e) => handleInputChange(e)} 
                                id="username" 
                                type="text" 
                                autoFocus 
                                placeholder="Username..."
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password</label>
                            <input 
                                onChange={(e) => handleInputChange(e)} 
                                id="password" 
                                type="password" 
                                placeholder="Password..."
                            />
                        </div>
                        <button type="submit" className={styles.loginFormBtn}>Log in</button>
                    </form>
                </div>
            }
        </div>
        
    )
}