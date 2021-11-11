import styles from './styles.module.css'
import { ImMusic as MusicIcon } from 'react-icons/im'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { BiMenuAltRight as MenuIcon } from 'react-icons/bi'
import cx from 'classnames'

interface NavbarLink {
    url: string
    displayName: string
}

const navbarLinks = new Array<NavbarLink>(
    { displayName: "About", url: "/about" },
    { displayName: "Author", url: "https://sohail-saha.in" },
    { displayName: "Support me", url: "https://www.buymeacoffee.com/captainwoof" }
)

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    // Handles toggling menu open state
    const toggleMenuOpen = useCallback((e) => {
        if (e.target === e.currentTarget) {
            setMenuOpen(prev => !prev)
        }
    }, [])

    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref><a className={styles.home_link}>
                <MusicIcon className={styles.home_icon} />
            </a></Link>
            <ul className={styles.navbar_links}>
                {navbarLinks.map((navbarLink, index) => (
                    <li className={styles.link} key={index}>
                        <Link href={navbarLink.url} passHref><a>
                            {navbarLink.displayName}
                        </a></Link>
                    </li>
                ))}
            </ul>
            <MenuIcon className={styles.menu_icon} onClick={toggleMenuOpen} />
            <div className={cx(styles.navbar_menu_backdrop, menuOpen && styles.open)} onClick={toggleMenuOpen} />
            <div className={cx(styles.navbar_menu, menuOpen && styles.open)}>
                {navbarLinks.map((navbarLink, index) => (
                    <div className={styles.menu_link} key={index}>
                        <Link href={navbarLink.url} passHref><a>
                            {navbarLink.displayName}
                        </a></Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar