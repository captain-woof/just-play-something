import type { NextPage } from 'next'
import Container from '../components/container'
import Genres from '../components/genres';
import Header from '../components/header';
import MusicGrid from '../components/music-grid';
import Player from '../components/player';
import Seo from '../components/seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Just Play Somethin'"
        description="Discover and play new tracks, everyday, and find new favourites from the genres you like."
        keywords="jamendo, play songs, new songs, free songs, pop songs, music app, free music app"
        urlRelative=""
        image={`${process.env.NEXT_PUBLIC_APP_ORIGIN}/images/just-play-somethin.png`}
        imageAlt="Just Play Somethin'"
      />
      <Container>
        <Header />
        <Genres />
        <MusicGrid />
        <Player />
      </Container>
    </>
  )
}

export default Home