import styles from "./CheckoutAddress.module.css"

export default function CheckoutAddress() {
    return (
        <>
            <h3 className={styles.title}>Shipping details</h3>
            <div className={styles.inputsContainer}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="firstName">First name</label>
                    <input 
                        autoFocus
                        type="text" 
                        id="firstName"
                        required 
                        placeholder="First Name"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="Last name">Last name</label>
                    <input 
                        type="text" 
                        id="lastName"
                        required 
                        placeholder="Last Name"
                    />
                </div>    
                <div className={styles.inputWrapper}>
                    <label htmlFor="phone">Contact phone number</label>
                    <input 
                        type="text"
                        id="phone"
                        required 
                        placeholder="Contact phone number"
                    />
                </div>    
                <div className={styles.inputWrapper}>
                    <label htmlFor="country">Country</label>
                    <input 
                        type="text" 
                        id="country"
                        required 
                        placeholder="Country"
                    />
                </div>
                <div className={styles.inputWrapper}>  
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        id="city"
                        required 
                        placeholder="City"
                    />
                </div> 
                <div className={styles.inputWrapper}>
                    <label htmlFor="street">Street</label>                 
                    <input 
                        type="text" 
                        id="street"
                        required 
                        placeholder="Street"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="flat">Flat number</label>
                    <input 
                        type="text" 
                        id="flat"
                        required 
                        placeholder="Flat Number"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="zipCode">Zip/Postal code</label>
                    <input 
                        type="text" 
                        id="zipCode"
                        required 
                        placeholder="Zip/Postal code"
                    />
                </div>                 
            </div>
        </>
    )
}