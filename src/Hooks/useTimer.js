import {useState} from "react";

let timerId = null;
function useTimer(step = 1000) {

    const [time, setTime] = useState(0);

    const startTimer = () => {
        if (!timerId) {
            timerId = setInterval(() => {
                setTime((time) => {
                    return time + 1;
                });
            }, step);
        }
    };

    const stopTimer = () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
            const savedTime = Number(time);
            setTime(0)
            return savedTime;
        }
    };
    return {
        time,
        startTimer,
        stopTimer,
    };
}

export default useTimer;