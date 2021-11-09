import styles from './styles.module.css'
import Image from 'next/image'
import { ITrack } from '../../types/track'
import { ImSpinner9 as LoadingIcon } from 'react-icons/im'
import { useCurrentTrack } from '../../hooks/tracks'
import cx from 'classnames'

interface IMusicCard {
    track: ITrack
}

const MusicCard = ({ track }: IMusicCard) => {
    const { album_id, album_name, audiodownload, audiodownload_allowed, image, position, artist_idstr, duration, artist_name, album_image, id, name, releasedate, artist_id, audio, shareurl } = track
    const { currentTrack, setCurrentTrack } = useCurrentTrack()

    return (
        <figure className={cx(styles.music_card, currentTrack?.id === track.id ? styles.selected : styles.deselected)} onClick={() => { setCurrentTrack(track) }}>
            <div className={styles.track_image_wrapper}>
                <LoadingIcon className={styles.status_icon} />
                <Image className={styles.track_image} alt={`${name} Cover art`} src={image} layout='fill' placeholder='empty' />
            </div>
            <figcaption className={styles.track_info_wrapper}>
                <span className={styles.track_name}>{name}</span>
                <span className={styles.track_artist}>{artist_name}</span>
            </figcaption>
        </figure>
    )
}

export default MusicCard