import styles from "./Faq.module.css"
import faq from "../../faq.json"

export default function Faq() {
    const faqData = faq

    const renderElements = faqData.map((item, index) => 
        <li key={index} className={styles.listItem}>
            <h4 className={styles.question}>{item.question}</h4>
            <p className={styles.answer}>{item.answer}</p>
        </li>)
    return(
        <> 
            <h3>FAQ</h3>
            {renderElements}
        </>
    )
}
