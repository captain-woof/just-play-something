export const ellipsize = (text: string | undefined, max_chars: number = 32): string => {
    if (!text) {
        return ""
    } else if (text.length <= max_chars) {
        return text
    } else {
        return `${text.slice(0, max_chars - 3)}...`
    }
}