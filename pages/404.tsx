import Container from "../components/container"
import styles from '../styles/error.module.css'
import { BiErrorCircle } from 'react-icons/bi'
import Seo from "../components/seo"

const NotFound = () => {
    return (
        <>
            <Seo
                title="Just Play Somethin'"
                description="Discover and play new tracks, everyday, and find new favourites from the genres you like."
                keywords="jamendo, play songs, new songs, free songs, pop songs, music app, free music app"
                urlRelative="/about"
                image={`${process.env.NEXT_PUBLIC_APP_ORIGIN}/images/just-play-somethin.png`}
                imageAlt="Just Play Somethin'"
            />
            <Container>
                <main className={styles.full_page}>
                    <h2 className={styles.heading}>Error 404</h2>
                    <span className={styles.error_msg}>
                        This page does not exist <BiErrorCircle className={styles.icon} />
                    </span>
                </main>
            </Container>
        </>
    )
}

export default NotFound