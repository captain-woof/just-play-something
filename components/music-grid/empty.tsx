import styles from './styles.module.css'
import { BiConfused as EmptyIcon } from 'react-icons/bi'

const Empty = () => {
    return (
        <div className={styles.status}>
            No tracks to load<EmptyIcon className={styles.status_icon}/>
        </div>
    )
}

export default Empty