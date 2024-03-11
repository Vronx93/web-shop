import styles from "./BenefitsList.module.css"
import benefitsData from "../../benefits.json"
import Benefit from "../Benefit/Benefit"

export default function BenefitsList() {
    const benefits = benefitsData.map((benefit, index) =>
        <Benefit
            key={`benefit ${index}`}
            index={index}
            benefit={benefit}
        />
        )

    return(
        <ul className={styles.list}>  
            {benefits}
        </ul>
    )
}