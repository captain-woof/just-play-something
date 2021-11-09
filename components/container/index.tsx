import { ChildrenProp } from "../../types/comps"
import styles from './styles.module.css'

interface IContainer extends ChildrenProp {}

const Container = ({ children }: IContainer) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container