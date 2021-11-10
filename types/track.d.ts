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
    licenses: {
        ccnc: "true" | "false"
        ccnd: "true" | "false"
        ccsa: "true" | "false"
        prolicensing: "true" | "false"
        probackground: "true" | "false"
    }
}

export interface ITracks extends Array<ITrack> { }

export type TrackLicense = {
    displayName: string
    url: string
}