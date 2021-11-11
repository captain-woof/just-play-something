import styles from "./styles.module.css"
import MusicCard from "../card"
import { useTracks } from "../../hooks/tracks"
import Loading from "./loading"
import Error from "./error"
import Empty from "./empty"
import { useEffect, useState } from "react"
import { useQuery } from "../../hooks/query"

enum Status {
    loading = 1,
    error = 2,
    empty = 3,
    ok = 4
}

const MusicGrid = () => {
    const { pending, error, tracks, fetchTracks } = useTracks()
    const [status, setStatus] = useState<number>(Status.loading)
    const { query } = useQuery()

    // Fetch tracks on first render
    useEffect(() => {
        if (tracks.length === 0) {
            fetchTracks()
        }
        // eslint-disable-next-line
    }, [tracks])

    // Update tracks if query.tags changes (not accounting for first render, which is handled above)
    useEffect(() => {
        if (tracks.length !== 0) {
            fetchTracks(false)
        }
        // eslint-disable-next-line
    }, [query.tags])

    // Keep track of status
    useEffect(() => {
        if (pending && !error && tracks.length === 0) {
            setStatus(Status.loading)
        } else if (tracks.length === 0 && error) {
            setStatus(Status.error)
        } else if (!pending && !error && tracks.length === 0) {
            setStatus(Status.empty)
        } else {
            setStatus(Status.ok)
        }
    }, [pending, error, tracks])

    return (
        <>
            {status === Status.loading &&
                <Loading />
            }
            {status === Status.error &&
                <Error />
            }
            {status === Status.empty &&
                <Empty />
            }
            {status === Status.ok &&
                <main className={styles.music_grid}>
                    {tracks.map((track) => (
                        <MusicCard key={track.id} track={track} />
                    ))}
                </main>
            }
        </>
    )
}

export default MusicGrid