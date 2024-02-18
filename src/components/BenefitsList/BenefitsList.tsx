import styles from "./BenefitsList.module.css"
import benefitsData from "../../benefits.json"

export default function BenefitsList() {
    const benefits = benefitsData.map((benefit, index) =>
    <li 
        key={index}
        className={styles.benefitContainer}    
    >
        <h2>{benefit.title}</h2>
        <img src={benefit.imgUrl} alt={`${benefit.title} icon`} />
        <p>{benefit.description}</p>
        <span className={styles.email}>{benefit.email}</span>
    </li>)

    return(
        <ul className={styles.list}>  
            {benefits}
        </ul>
    )
}