import Container from "../components/container"
import styles from '../styles/error.module.css'
import { RiSignalWifiErrorLine } from 'react-icons/ri'

const NotFound = () => {
    return (
        <Container>
            <main className={styles.full_page}>
                <h2 className={styles.heading}>No internet</h2>
                <span className={styles.error_msg}>
                    You&apos;re offline. Check your connection. <RiSignalWifiErrorLine className={styles.icon} />
                </span>
            </main>
        </Container>
    )
}

export default NotFound