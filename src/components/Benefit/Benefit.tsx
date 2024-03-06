import styles from "./Benefit.module.css"

interface Benefit {
    title: string;
    description: string;
    imgUrl: string;
    email?: string | undefined;
}

export default function Benefit({index, benefit} : {index: number, benefit: Benefit}) {
    return(
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
    </li>
    )
}