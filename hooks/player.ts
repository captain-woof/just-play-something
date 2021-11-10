import { useRef, useState, useEffect, useCallback, MouseEvent } from "react"
import { useCurrentTrack, useTracks } from "./tracks"


export const usePlayer = () => {
    // States for tracks
    const { tracks, fetchTracks } = useTracks()
    const { currentTrack, setCurrentTrack } = useCurrentTrack()

    // States for player controls    
    const [pause, setPause] = useState<boolean>(true)
    const [seekSecs, setSeekSecs] = useState<number>(0)
    const [autoplay, setAutoPlay] = useState<boolean>(true)
    const [volume, setVolume] = useState<number>(0.25)
    const [mute, setMute] = useState<boolean>(false)

    // State for triggering track info modal
    const [showInfo, setShowInfo] = useState<boolean>(false)

    // Reference to audio element
    const audioRef = useRef<HTMLAudioElement>(null)

    /////////////////////
    // Listen for events
    ////////////////////

    // Loads last set volume from local storage
    useEffect(() => {
        if (!!window.localStorage.getItem('volume')) {
            setVolume(parseFloat(window.localStorage.getItem('volume') as string))
        }
    }, [])

    // Sets volume to audio element when it changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
            window.localStorage.setItem('volume', `${volume}`)
        }
    }, [volume])

    // Loads Autoplay preference from local storage
    useEffect(() => {
        if (typeof window.localStorage.getItem('autoplay') !== 'undefined') {
            setAutoPlay(window.localStorage.getItem('autoplay') === 'true')
        }
    }, [])

    // Plays/pauses audio
    useEffect(() => {
        if (audioRef.current) {
            if (pause) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
        }
    }, [pause])

    // Fetches new tracks if last track is reached
    useEffect(() => {
        if (currentTrack && currentTrack.index === tracks.length - 1) {
            fetchTracks()
        }
        // eslint-disable-next-line
    }, [currentTrack, tracks])

    ///////////////////////
    //// Control functions
    ///////////////////////

    // Function to toggle showing Track info
    const toggleTrackInfo = useCallback((e: MouseEvent) => {
        if (!!e && e.target === e.currentTarget) {
            setShowInfo(prev => !prev)
        }
    }, [])

    // Function to toggle Mute state
    const toggleMute = useCallback(() => {
        setMute(prev => !prev)
    }, [])

    // Function to handle audio volume change
    const handleVolumeChange = useCallback((e) => {
        setVolume(e.target.value)
    }, [])

    // Function to toggle autoplay
    const toggleAutoplay = useCallback(() => {
        setAutoPlay(prev => {
            window.localStorage.setItem('autoplay', `${!prev}`)
            return !prev
        })
    }, [])

    // Function that slider uses to set audio progress
    const handleSeekChangeSlider = useCallback((e) => {
        setSeekSecs(e.target?.value)
        if (audioRef.current) {
            audioRef.current.currentTime = e.target?.value
        }
    }, [audioRef])

    // Function that audio uses to set audio progress
    const handleSeekChangeAudio = useCallback((e) => {
        if (audioRef.current) {
            setSeekSecs(audioRef.current.currentTime)
        }
    }, [])

    // Function to play next track
    const playNextTrack = useCallback(async () => {
        if (currentTrack) {
            setCurrentTrack(tracks[currentTrack.index + 1])
        }
    }, [currentTrack, setCurrentTrack, tracks])

    // Function to play previous track
    const playPrevTrack = useCallback(async () => {
        if (currentTrack && currentTrack.index !== 0) {
            // Only if current track is not first track
            setCurrentTrack(tracks[currentTrack.index - 1])
        }
    }, [currentTrack, setCurrentTrack, tracks])

    return {
        showInfo,
        toggleTrackInfo,
        pause,
        setPause,
        seekSecs,
        autoplay,
        toggleAutoplay,
        volume,
        mute,
        audioRef,
        toggleMute,
        handleVolumeChange,
        handleSeekChangeSlider,
        handleSeekChangeAudio,
        playNextTrack,
        playPrevTrack
    }
}