import styles from './styles.module.css'
import { ImCross as ErrorIcon } from 'react-icons/im'

const Error = () => {
    return (
        <div className={styles.status}>
            Error loading tracks<ErrorIcon className={styles.status_icon}/>
        </div>
    )
}

export default Error