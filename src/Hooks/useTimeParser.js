function UseTimeParser(props) {

    const parseSecondsToHms = (timeInSeconds) => {
        timeInSeconds = Number(timeInSeconds);
        const h = Math.floor(timeInSeconds / 3600);
        const m = Math.floor(timeInSeconds % 3600 / 60);
        const s = Math.floor(timeInSeconds % 3600 % 60);

        const hdisplay = h < 10 ? `0${h}` : h;
        const mdisplay = m < 10 ? `0${m}` : m;
        const sdisplay = s < 10 ? `0${s}` : h;

        return `${hdisplay}:${mdisplay}:${sdisplay}`;
    };

    return {
        parseSecondsToHms,
    };
}

export default UseTimeParser;