import { useQuery } from '../../hooks/query'
import { Genres } from '../../types/genre'
import styles from './styles.module.css'
import cx from 'classnames'

const genres: Genres = [
    { name: null, displayName: "All" },
    { name: "classical", displayName: "Classical" },
    { name: "electronic", displayName: "Electronic" },
    { name: "hiphop", displayName: "HipHop" },
    { name: "jazz", displayName: "Jazz" },
    { name: "lounge", displayName: "Lounge" },
    { name: "metal", displayName: "Metal" },
    { name: "pop", displayName: "Pop" },
    { name: "relaxation", displayName: "Relaxation" },
    { name: "rock", displayName: "Rock" },
    { name: "songwriter", displayName: "Songwriter" },
    { name: "world", displayName: "World" },
]

const Genres = () => {
    const { setTag, query: { tags } } = useQuery()

    return (
        <div className={styles.genres_container} aria-labelledby="Genres" aria-describedby="Select a genre you like">
            {genres.map((genre, index) => (
                <button key={index} className={cx(styles.genre, tags === genre.name && styles.selected)} onClick={() => { setTag(genre.name) }} aria-labelledby={genre.displayName}>
                    {genre.displayName}
                </button>
            ))}
        </div>
    )
}

export default Genres