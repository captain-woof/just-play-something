import type { NextPage } from 'next'
import Container from '../components/container'
import Footer from '../components/footer';
import Header from '../components/header';
import Seo from '../components/seo';
import styles from '../styles/about.module.css'

const About: NextPage = () => {
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
                <Header />
                <main className={styles.inner_container}>
                    <h3 className={styles.heading}>
                        What is this site?
                    </h3>
                    <p className={styles.about_text}>
                        Hey! <a href="https://sohail-saha.in" className={styles.about_link}>This is me, Sohail</a>. Just Play Somethin&apos; is a site I created that brings you music created by independent artists. You may find tracks you haven&apos;t heard before. There is no search functionality, because you wouldn&apos;t know the name of a song that you haven&apos;t heard, isn&apos;t it?
                    </p>
                    <p className={styles.about_text}>
                        That being said, you can choose genres to filter the results, and you&apos;ll get curated recommendations from that genre.
                    </p>
                    <h3 className={styles.heading}>
                        Who owns the tracks?
                    </h3>
                    <p className={styles.about_text}>
                        This site is powered by <a href="https://jamendo.com" className={styles.about_link}>Jamendo</a>. All tracks you find here are owned by their respective artists <i>(the info button on the player)</i>, who published their work to Jamendo.
                    </p>
                    <p className={styles.about_text}>
                        As for terms of licenses, each track&apos;s details will show you the licenses under which Jamendo has the right to make the tracks available.
                    </p>
                    <h3 className={styles.heading}>
                        Is this free?
                    </h3>
                    <p className={styles.about_text}>
                        <u>Yes, it is.</u> Since Jamendo offers the tracks for free, you can listen to them here for free as well. No strings attached.
                    </p>
                    <p className={styles.about_text}>
                        That being said, developing sites like this takes a little time, and I would be glad if you chose to <a href="https://www.buymeacoffee.com/captainwoof" className={styles.about_link}>support me on Buy Me a Coffee.</a>
                    </p>
                </main>
                <Footer />
            </Container>
        </>
    )
}

export default About