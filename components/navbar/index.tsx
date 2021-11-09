import styles from './styles.module.css'
import { ImMusic as MusicIcon } from 'react-icons/im'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref><a className={styles.home_link}>
                <MusicIcon className={styles.home_icon} />
            </a></Link>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <Link href="/about" passHref><a>
                        About
                    </a></Link>
                </li>
                <li className={styles.link}>
                    <Link href="https://sohail-saha.in" passHref><a>
                        Author
                    </a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar