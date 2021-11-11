import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header_wrapper}>
            <h1 className={styles.header_text} aria-labelledby="Heading">Just play somethin&apos;</h1>
            <p className={styles.header_subtitle} aria-labelledby="Subheading">Discover new tracks, everyday.</p>
        </header>
    )
}

export default Header