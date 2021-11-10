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
import { track_licenses } from '../../constants/track_licenses'

const Player = () => {
    const { currentTrack } = useCurrentTrack()
    const { audioRef, autoplay, volume, seekSecs, pause, setPause, mute, toggleMute, handleVolumeChange, toggleAutoplay, handleSeekChangeSlider, handleSeekChangeAudio, playNextTrack, playPrevTrack, showInfo, toggleTrackInfo } = usePlayer()

    return (
        <aside className={styles.player}>
            {/* Track info modal */}
            {currentTrack &&
                <div className={cx(styles.info_modal, showInfo && styles.show)} onClick={toggleTrackInfo}>
                    <figure className={styles.info_card}>
                        <div className={styles.info_text}>
                            <span className={styles.info_key}>Name:</span>
                            <span className={styles.info_val}>{currentTrack.name}</span>
                        </div>
                        <div className={styles.info_text}>
                            <span className={styles.info_key}>Artist:</span>
                            <span className={styles.info_val}>{currentTrack.artist_name}</span>
                        </div>
                        <div className={styles.info_text}>
                            <span className={styles.info_key}>Album:</span>
                            <span className={styles.info_val}>{currentTrack.album_name}</span>
                        </div>
                        <div className={styles.info_text}>
                            <span className={styles.info_key}>Released on:</span>
                            <span className={styles.info_val}>{currentTrack.releasedate}</span>
                        </div>
                        <div className={styles.info_button_containers}>
                            {currentTrack.audiodownload_allowed &&
                                <a className={styles.info_button} href={currentTrack.audiodownload} download>
                                    Download
                                </a>
                            }
                            <a className={styles.info_button} href={currentTrack.shareurl} target='_blank' rel='noreferrer'>
                                Visit
                            </a>
                        </div>

                        <div className={styles.info_text} style={{ marginTop: 'var(--sp-400)' }}>
                            <span className={cx(styles.info_key, styles.licenses_key)}>Licenses</span>
                            <ul className={styles.licenses_list}>
                                {currentTrack.licenses.ccnc === 'true' &&
                                    <li>
                                        <a href={track_licenses.ccnc.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccnc.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.ccnd === 'true' &&
                                    <li>
                                        <a href={track_licenses.ccnd.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccnd.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.ccsa === 'true' &&
                                    <li>
                                        <a href={track_licenses.ccsa.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccsa.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.prolicensing === 'true' &&
                                    <li>
                                        <a href={track_licenses.prolicensing.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.prolicensing.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.probackground === 'true' &&
                                    <li>
                                        <a href={track_licenses.probackground.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.probackground.displayName}</span>
                                        </a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </figure>
                </div>
            }

            {/* Rotating track image */}
            <div className={styles.thumbnail_wrapper}>
                <div className={styles.thumbnail_inner_wrapper}>
                    <DiscIcon className={styles.disc_icon} />
                    {currentTrack &&
                        <Image layout='fill' src={currentTrack?.image} alt={`${currentTrack?.name} track image`} objectFit='cover' className={styles.track_image} />
                    }
                </div>
            </div>

            {/* Track and artist name */}
            <div aria-labelledby="Track name" aria-describedby={(currentTrack?.name || "Hey there!")} className={styles.track_name_info}>
                {currentTrack?.name || "Hey there!"}
                <InfoButton aria-labelledby='Info button' className={styles.info_icon} onClick={toggleTrackInfo} />
            </div>
            <div aria-labelledby="Artist name" aria-describedby={(currentTrack?.artist_name || "Select a track to get started")} className={styles.artist_name}>
                {currentTrack?.artist_name || "Select a track to get started"}
            </div>

            {/* Timestamp, Autoplay */}
            <div className={styles.timestamp_autoplay}>
                <AutoplayButton aria-labelledby='Set autoplay' className={cx(styles.autoplay_icon, !autoplay && styles.autoplay_disabled)} onClick={toggleAutoplay} />
                <span aria-labelledby="Track duration" aria-describedby={`${getAccessibleTime(currentTrack?.duration || 0)}`} className={styles.time}>
                    {`${getFormattedTime(seekSecs)} / ${getFormattedTime(currentTrack?.duration || 0)}`}
                </span>
            </div>

            {/* Progress slider */}
            <input aria-labelledby="Progress slider" type='range' min={0} max={currentTrack?.duration} className={styles.slider} id='progress-track' onInput={handleSeekChangeSlider} value={seekSecs} disabled={!currentTrack} />

            <div className={styles.track_controls}>
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