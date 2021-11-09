export const getFormattedTime = (seconds: number): string => {
    let mins = Math.floor(seconds / 60)
    let secs = Math.floor(seconds % 60)
    let minsStamp = (mins < 10 ? `0${mins}` : `${mins}`)
    let secsStamp = (secs < 10 ? `0${secs}` : `${secs}`)
    return `${minsStamp}:${secsStamp}`
}

export const getAccessibleTime = (seconds: number): string => {
    let mins = Math.floor(seconds / 60)
    let secs = Math.floor(seconds % 60)
    return `${mins} minutes ${secs} seconds`
}