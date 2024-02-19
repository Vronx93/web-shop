import styles from "./Hero.module.css"

export default function Hero() {
    return(
        <section className={styles.heroContainer}>
            <img className={styles.heroImg} src="src/assets/images/hero-img.jpg" alt="Shopping bags" />
        </section>
    )
}