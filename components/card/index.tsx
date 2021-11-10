import styles from './styles.module.css'
import Image from 'next/image'
import { ITrack } from '../../types/track'
import { ImSpinner9 as LoadingIcon } from 'react-icons/im'
import { useCurrentTrack, useTracks } from '../../hooks/tracks'
import cx from 'classnames'
import { useCallback, useEffect, useRef } from 'react'
import { useIntersectionRevealer } from 'react-intersection-revealer'

interface IMusicCard {
    track: ITrack
}

const MusicCard = ({ track }: IMusicCard) => {
    const { image, artist_name, name } = track
    const { currentTrack, setCurrentTrack } = useCurrentTrack()
    const { tracks, fetchTracks } = useTracks()
    const cardRef = useRef<HTMLDivElement>(null)
    const { inView } = useIntersectionRevealer(cardRef)

    // Handles being selected - changes current track
    const handleBeingSelected = useCallback(() => {
        setCurrentTrack(track)
    }, [setCurrentTrack, track])

    // On being selected - scrolls to card
    useEffect(() => {
        if (currentTrack?.id === track.id) {
            cardRef.current?.scrollIntoView()
        }
    }, [currentTrack?.id, track.id, track.name])

    // If card is in view and is last track, fetch more tracks
    useEffect(() => {
        if ((tracks.length - 1 === track.index) && inView){
            fetchTracks()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, tracks.length, track.index])

    return (
        <figure className={cx(styles.music_card, currentTrack?.id === track.id ? styles.selected : styles.deselected)} onClick={handleBeingSelected} ref={cardRef}>
            <div className={styles.track_image_wrapper}>
                <LoadingIcon className={styles.status_icon} />
                <Image className={styles.track_image} alt={`${name} Cover art`} src={image} layout='fill' placeholder='empty' objectFit='cover' objectPosition='center center' />
            </div>
            <figcaption className={styles.track_info_wrapper}>
                <span className={styles.track_name}>{name}</span>
                <span className={styles.track_artist}>{artist_name}</span>
            </figcaption>
        </figure>
    )
}

export default MusicCard