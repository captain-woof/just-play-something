import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header_wrapper}>
            <h1 className={styles.header_text}>Just play something</h1>
            <p className={styles.header_subtitle}>If you&apos;re new here, this is a site where you find new random songs you can listen to at anytime.</p>
        </header>
    )
}

export default Header