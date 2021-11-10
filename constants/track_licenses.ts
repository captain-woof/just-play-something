import { TrackLicense } from "../types/track";

interface ITrackLicenses {
    ccnc: TrackLicense
    ccnd: TrackLicense
    ccsa: TrackLicense
    prolicensing: TrackLicense
    probackground: TrackLicense
}

export const track_licenses: ITrackLicenses = {
    ccnc: {
        displayName: 'Creative Commons NonCommercial',
        url: 'https://creativecommons.org/licenses/by-nc/2.0/'
    },
    ccnd: {
        displayName: 'Creative Commons NoDerivs',
        url: 'https://creativecommons.org/licenses/by-nd/2.0/'
    },
    ccsa: {
        displayName: 'Creative Commons ShareAlike',
        url: 'https://creativecommons.org/licenses/by-sa/2.0/'
    },
    prolicensing: {
        displayName: 'Jamendo Pro',
        url: 'https://licensing.jamendo.com/en/royalty-free-music'
    },
    probackground: {
        displayName: 'Jamendo Background',
        url: 'https://licensing.jamendo.com/en/royalty-free-music'
    }
}