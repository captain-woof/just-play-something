import styles from './styles.module.css'
import { useCurrentTrack } from '../../hooks/tracks'
import { BsFillDiscFill as DiscIcon } from 'react-icons/bs'
import Image from 'next/image'
import { getAccessibleTime, getFormattedTime } from '../../utils/time'
import { GrPlay as PlayButton } from 'react-icons/gr'
import { FiSkipBack as PrevTrackButton, FiSkipForward as NextTrackButton, FiPause as PauseButton, FiVolume2 as VolumeButton, FiVolumeX as VolumeMutedButton, FiInfo as InfoButton } from 'react-icons/fi'
import { TiArrowLoop as AutoplayButton } from 'react-icons/ti'
import cx from 'classnames'
import { usePlayer } from '../../hooks/player'
import { ellipsize } from '../../utils/text'

const Player = () => {
    const { currentTrack } = useCurrentTrack()
    const { audioRef, autoplay, volume, seekSecs, pause, setPause, mute, toggleMute, handleVolumeChange, toggleAutoplay, handleSeekChangeSlider, handleSeekChangeAudio, playNextTrack, playPrevTrack } = usePlayer()

    return (
        <aside className={styles.player}>
            <div className={styles.thumbnail_wrapper}>
                <div className={styles.thumbnail_inner_wrapper}>
                    <DiscIcon className={styles.disc_icon} />
                    {currentTrack &&
                        <Image layout='fill' src={currentTrack?.image} alt={`${currentTrack?.name} track image`} objectFit='cover' className={styles.track_image} />
                    }
                </div>
            </div>
            {/* Track and artist name */}
            <span aria-labelledby="Track and artist name" aria-describedby={(currentTrack?.name || "Hey there!") + (currentTrack?.artist_name || "Select a track to get started")} className={styles.name}>
                <b>{ellipsize(currentTrack?.name) || "Hey there!"}</b> - <i>{ellipsize(currentTrack?.artist_name) || "Select a track to get started"}</i>
                <InfoButton aria-labelledby='Info button' className={styles.info_icon} />
            </span>
            {/* Progress slider */}
            <input aria-labelledby="Progress slider" type='range' min={0} max={currentTrack?.duration} className={styles.slider} id='progress-track' onInput={handleSeekChangeSlider} value={seekSecs} disabled={!currentTrack} />

            <div className={styles.track_controls}>
                {/* Timestamp, Autoplay */}
                <div className={styles.track_controls_left}>
                    <AutoplayButton aria-labelledby='Set autoplay' className={cx(styles.autoplay_icon, !autoplay && styles.autoplay_disabled)} onClick={toggleAutoplay} />
                    <span aria-labelledby="Track duration" aria-describedby={`${getAccessibleTime(currentTrack?.duration || 0)}`} className={styles.time}>
                        {`${getFormattedTime(seekSecs)} / ${getFormattedTime(currentTrack?.duration || 0)}`}
                    </span>
                </div>
                {/* Prev, Play/Pause, Next */}
                <div className={cx(styles.player_button_container, !currentTrack && styles.player_buttons_disabled)}>
                    <PrevTrackButton className={styles.player_button} title="Skip backward" aria-labelledby="Skip backward button" onClick={playPrevTrack} />
                    {pause
                        ? <PlayButton className={styles.player_button} title="Play" aria-labelledby="Play button" onClick={() => { setPause(false) }} />
                        : <PauseButton className={styles.player_button} title="Pause" aria-labelledby="Pause button" onClick={() => { setPause(true) }} />}
                    <NextTrackButton className={styles.player_button} title="Skip forward" aria-labelledby="Skip forward button" onClick={playNextTrack} />
                </div>
                {/* Volume */}
                <div className={styles.volume_container}>
                    {mute
                        ? <VolumeMutedButton title="Volume slider" aria-labelledby="Volume slider" className={cx(styles.volume_icon, styles.volume_icon_dim)} onClick={toggleMute} />
                        : <VolumeButton title="Volume slider" aria-labelledby="Volume slider" className={styles.volume_icon} onClick={toggleMute} />
                    }
                    <input aria-labelledby="Volume slider" type='range' min={0} max={1.0} step={0.05} className={cx(styles.slider, styles.volume_slider)} id='volume-track' onInput={handleVolumeChange} value={volume} />
                </div>
            </div>
            <audio className={styles.audio} src={currentTrack?.audio} ref={audioRef} onTimeUpdate={handleSeekChangeAudio} onEnded={playNextTrack} autoPlay={autoplay} onPlay={() => setPause(false)} muted={mute} />
        </aside>
    )
}

export default Player