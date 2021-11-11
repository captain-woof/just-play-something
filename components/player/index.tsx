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
import { CSSProperties, useMemo } from 'react'

const Player = () => {
    const { currentTrack } = useCurrentTrack()
    const { audioRef, autoplay, volume, seekSecs, pause, setPause, mute, toggleMute, handleVolumeChange, toggleAutoplay, handleSeekChangeSlider, handleSeekChangeAudio, playNextTrack, playPrevTrack, showInfo, toggleTrackInfo, startProgress, endProgress } = usePlayer()

    const volumeWidthStyle = useMemo(() => ({
        "--volume-perc": `${volume * 100}%`
    }), [volume]) as CSSProperties

    const progressWidthStyle = useMemo(() => ({
        "--progress-perc": `${((!!audioRef.current) ? (seekSecs / audioRef.current?.duration) : 0) * 100}%`
    }), [audioRef, seekSecs]) as CSSProperties

    return (
        <aside className={styles.player}>
            {/* Track info modal */}
            {currentTrack &&
                <div className={cx(styles.info_modal, showInfo && styles.show)} onClick={toggleTrackInfo} aria-labelledby="Track info">
                    <figure className={styles.info_card}>
                        {/* Track name */}
                        <div className={styles.info_text} aria-labelledby="Name">
                            <span className={styles.info_key}>Name:</span>
                            <span className={styles.info_val}>{currentTrack.name}</span>
                        </div>
                        {/* Track artist */}
                        <div className={styles.info_text} aria-labelledby="Artist">
                            <span className={styles.info_key}>Artist:</span>
                            <span className={styles.info_val}>{currentTrack.artist_name}</span>
                        </div>
                        {/* Track album */}
                        <div className={styles.info_text} aria-labelledby="Album">
                            <span className={styles.info_key}>Album:</span>
                            <span className={styles.info_val}>{currentTrack.album_name}</span>
                        </div>
                        {/* Track released on */}
                        <div className={styles.info_text} aria-labelledby="Released on">
                            <span className={styles.info_key}>Released on:</span>
                            <span className={styles.info_val}>{currentTrack.releasedate}</span>
                        </div>
                        {/* Links */}
                        <div className={styles.info_button_containers} aria-labelledby="Links">
                            {currentTrack.audiodownload_allowed &&
                                <a className={styles.info_button} href={currentTrack.audiodownload} download>
                                    Download
                                </a>
                            }
                            <a className={styles.info_button} href={currentTrack.shareurl} target='_blank' rel='noreferrer'>
                                Visit
                            </a>
                        </div>
                        {/* Licenses */}
                        <div className={styles.info_text} style={{ marginTop: 'var(--sp-400)' }} aria-labelledby="Licenses">
                            <span className={cx(styles.info_key, styles.licenses_key)}>Licenses</span>
                            <ul className={styles.licenses_list}>
                                {currentTrack.licenses.ccnc === 'true' &&
                                    <li aria-labelledby="CCNC">
                                        <a href={track_licenses.ccnc.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccnc.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.ccnd === 'true' &&
                                    <li aria-labelledby="CCND">
                                        <a href={track_licenses.ccnd.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccnd.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.ccsa === 'true' &&
                                    <li aria-labelledby="CCSA">
                                        <a href={track_licenses.ccsa.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.ccsa.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.prolicensing === 'true' &&
                                    <li aria-labelledby="Jamendo">
                                        <a href={track_licenses.prolicensing.url} target="_blank" rel="noreferrer">
                                            <span className={cx(styles.info_val, styles.license_display_name)}>{track_licenses.prolicensing.displayName}</span>
                                        </a>
                                    </li>
                                }
                                {currentTrack.licenses.probackground === 'true' &&
                                    <li aria-labelledby="Jamendo">
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
                    <DiscIcon className={cx(styles.disc_icon, !pause && styles.rotate)} />
                    {currentTrack &&
                        <Image layout='fill' src={currentTrack?.image} alt={`${currentTrack?.name} track image`} objectFit='cover' className={cx(styles.track_image, !pause && styles.rotate)} />
                    }
                </div>
            </div>

            {/* Track name */}
            <div aria-labelledby="Track name" aria-describedby={(currentTrack?.name || "Hey there!")} className={styles.track_name} onClick={toggleTrackInfo} >
                {currentTrack?.name || "Hey there!"}
                <InfoButton aria-labelledby='Info button' className={styles.info_icon} />
            </div>
            {/* Artist name */}
            <div aria-labelledby="Artist name" aria-describedby={(currentTrack?.artist_name || "Select a track to get started")} className={styles.artist_name}>
                {currentTrack?.artist_name || "Select a track to get started"}
            </div>

            {/* Timestamp, Autoplay */}
            <div className={styles.timestamp_autoplay}>
                <AutoplayButton aria-labelledby='Set autoplay' className={cx(styles.autoplay_icon, !autoplay && styles.autoplay_disabled)} onClick={toggleAutoplay} title="Set autoplay" />
                <span aria-labelledby="Track duration" aria-describedby={`${getAccessibleTime(currentTrack?.duration || 0)}`} className={styles.time}>
                    {`${getFormattedTime(seekSecs)} / ${getFormattedTime(currentTrack?.duration || 0)}`}
                </span>
            </div>

            {/* Progress slider */}
            <input aria-labelledby="Progress slider" type='range' min={0} max={currentTrack?.duration} className={styles.slider} id='progress-track' onInput={handleSeekChangeSlider} value={seekSecs} disabled={!currentTrack} style={progressWidthStyle} />

            <div className={styles.track_controls}>
                {/* Prev, Play/Pause, Next */}
                <div className={cx(styles.player_button_container, !currentTrack && styles.player_buttons_disabled)}>
                    <PrevTrackButton className={styles.player_button} title="Previous track" aria-labelledby="Previous track button" onClick={() => { currentTrack && playPrevTrack() }} />
                    {pause
                        ? <PlayButton className={styles.player_button} title="Play" aria-labelledby="Play button" onClick={() => { currentTrack && setPause(false) }} />
                        : <PauseButton className={styles.player_button} title="Pause" aria-labelledby="Pause button" onClick={() => { currentTrack && setPause(true) }} />}
                    <NextTrackButton className={styles.player_button} title="Next track" aria-labelledby="Next track button" onClick={() => { currentTrack && playNextTrack() }} />
                </div>
                {/* Volume */}
                <div className={styles.volume_container}>
                    {mute
                        ? <VolumeMutedButton title="Volume slider" aria-labelledby="Volume slider" className={cx(styles.volume_icon, styles.volume_icon_dim)} onClick={toggleMute} />
                        : <VolumeButton title="Volume slider" aria-labelledby="Volume slider" className={styles.volume_icon} onClick={toggleMute} />
                    }
                    <input aria-labelledby="Volume slider" type='range' min={0} max={1.0} step={0.01} className={cx(styles.slider, styles.volume_slider)} id='volume-track' onInput={handleVolumeChange} value={volume} style={volumeWidthStyle} />
                    <span className={styles.volume_indicator}>
                        {parseInt(`${volume * 100}`)}
                    </span>
                </div>
            </div>
            <audio className={styles.audio} src={currentTrack?.audio} ref={audioRef} onTimeUpdate={handleSeekChangeAudio} onEnded={playNextTrack} autoPlay={autoplay} onPlay={() => setPause(false)} muted={mute} onLoadStart={startProgress} onCanPlay={endProgress} />
        </aside>
    )
}

export default Player