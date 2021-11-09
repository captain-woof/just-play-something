export interface ITrack {
    id: number
    name: string
    duration: number
    artist_id: string
    artist_name: string
    artist_idstr: string
    album_name: string
    album_id: string
    position: number
    releasedate: string
    album_image: string
    audio: string
    audiodownload: string
    shareurl: string
    image: string
    audiodownload_allowed: boolean
    [key: string]: any
    index: number
}

export interface ITracks extends Array<ITrack> { }