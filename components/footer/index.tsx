import styles from './styles.module.css'
import { FiHeadphones as HeadphoneIcon } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className={styles.footer_container} aria-labelledby="Footer" aria-describedby="Created by Sohail">
            <HeadphoneIcon className={styles.headphone_icon} />
            <span className={ styles.credit_text }>
                Created by <a href="https://sohail-saha.in" className={styles.link}>Sohail</a>
            </span>
        </footer>
    )
}

export default Footer