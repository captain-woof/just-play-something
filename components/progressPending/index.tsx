import { useProgressPending } from '../../hooks/progressPending'
import styles from './styles.module.css'
import cx from 'classnames'

const ProgressPending = () => {
    const { pendingProgress } = useProgressPending()
    return (
        <div className={styles.pending_progress}>
            <div className={cx(styles.progress_bar, pendingProgress && styles.animate)} />
        </div>
    )
}

export default ProgressPending