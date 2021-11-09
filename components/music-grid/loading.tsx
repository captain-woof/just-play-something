import styles from './styles.module.css'
import { ImSpinner9 as LoadingIcon } from 'react-icons/im'

const Loading = () => {
    return (
        <div className={styles.status}>
            <LoadingIcon className={styles.status_icon} data-rotate/>
        </div>
    )
}

export default Loading