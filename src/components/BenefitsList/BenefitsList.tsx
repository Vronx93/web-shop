import styles from "./BenefitsList.module.css"
import benefitsData from "../../benefits.json"

export default function BenefitsList() {
    const benefits = benefitsData.map((benefit, index) =>
    <li 
        key={index}
        className={styles.benefitContainer}    
    >   
        <div className={styles.titleImgWrapper}>
            <h2 className={styles.title}>{benefit.title}</h2>
            <img src={benefit.imgUrl} alt={`${benefit.title} icon`} />
        </div>
        <p className={styles.text}>{benefit.description}</p>
        <span className={styles.email}>{benefit.email}</span>
    </li>)

    return(
        <ul className={styles.list}>  
            {benefits}
        </ul>
    )
}