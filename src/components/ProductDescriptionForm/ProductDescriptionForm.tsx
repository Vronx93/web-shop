import styles from "./ProductDescriptionForm.module.css"

export default function ProductDescription() {

    function handleSubmit(event : any) {
        event.preventDefault()
        console.log("form submitted")
    }

    return(
        <div className={styles.descriptionContainer}>
            <form 
                onSubmit={(event) => handleSubmit(event)} 
                method="post"
                className={styles.form}
            >
                <div className={styles.inputContainer}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input id="quantity" type="number"/>
                </div>
                <button className={styles.shopBtn}>
                    Add to <img className={styles.shopBag} src="../../src/assets/images/shop-bag.svg" alt="Shopping bag" />
                </button>
            </form>
        </div>
    )
}