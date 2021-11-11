import Container from "../components/container"
import styles from '../styles/error.module.css'
import { BiErrorCircle } from 'react-icons/bi'

const NotFound = () => {
    return (
        <Container>
            <main className={styles.full_page}>
                <h2 className={styles.heading}>Error 404</h2>
                <span className={styles.error_msg}>
                    This page does not exist <BiErrorCircle className={styles.icon} />
                </span>
            </main>
        </Container>
    )
}

export default NotFound