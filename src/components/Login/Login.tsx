import { useEffect, useState } from "react"
import styles from "./Login.module.css"
import { LoginUser } from "../../api"

//add if logged in show Log out instead of Log in, add register
export type FormData = {
    username: string,
    password: string
}

export default function Login() {
    const [isLoginVisible, setIsLoginVisible] = useState(false)
    const [formData, setFormData] = useState<FormData>({username: "", password: ""})

    function handleInputChange(e : any) {
            if(e?.target?.id === "username") {
                setFormData(prevFormData => ({...prevFormData, username: e?.target?.value}))
            } else if(e?.target?.id === "password") {
                setFormData(prevFormData => ({...prevFormData, password: e?.target?.value}))
            }
        }
    
    function handleLoginFormClick(e : any) {
        e.preventDefault()
        LoginUser({formData})
    }

    return(
        <div className={styles.loginContainer}>
            <button className={styles.loginBtn} onClick={() => setIsLoginVisible(true)}>Log in</button> 
            {
                isLoginVisible &&
                <div className={styles.formContainer}>
                    <form method="post" className={styles.loginForm} onSubmit={(e) => handleLoginFormClick(e)}>
                        <button 
                            type="button" 
                            className={styles.closeBtn}
                            onClick={() => setIsLoginVisible(false)}
                        >
                            <img src="../../src/assets/images/close-btn.svg" alt="Closing symbol" />
                        </button>
                        <div className={styles.inputContainer}>
                            <label htmlFor="username">Username</label>
                            <input onChange={(e) => handleInputChange(e)} id="username" type="text" autoFocus placeholder="Username..." />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => handleInputChange(e)} id="password" type="password" placeholder="Password..."/>
                        </div>
                        <button type="submit" className={styles.loginFormBtn}>Log in</button>
                    </form>
                </div>
            }
        </div>
        
    )
}