export function calculatePopularity(popularity) {
    if (popularity >= 80)
        return "Hot";
    else if (popularity >= 60)
        return "Cool";
    else if (popularity >= 30)
        return "Regular";
    else
        return "Underground";
}

const minute = 60;

export function toMinutes(duration_ms) {
    const duration = Math.floor(duration_ms / 1000);
    const minutes = Math.floor((duration) / minute);
    const seconds = Math.floor(duration % minute);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
}