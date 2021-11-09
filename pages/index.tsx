import type { NextPage } from 'next'
import Container from '../components/container'
import Header from '../components/header';
import MusicGrid from '../components/music-grid';
import Player from '../components/player';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <MusicGrid />
      <Player />
    </Container>
  )
}

export default Home