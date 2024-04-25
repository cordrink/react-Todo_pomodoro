import Button from "../../UI/Button/Button";
import s from "./TaskTimer.module.css"
import useTimer from "../../../Hooks/useTimer";
import useTimeParser from "../../../Hooks/useTimeParser";
import {useContext, useEffect} from "react";
import  {TasksContexts} from "../../../Contexts/TasksContexts";

const TaskTimer = ({index, onCloseModal}) => {

    const {time,startTimer, stopTimer} = useTimer();
    const { parseSecondsToHms } = useTimeParser();

    const { editTask } = useContext(TasksContexts);

    useEffect(() => {

        startTimer();

        return () => {
            stopTimer()
        };
    }, []);

    const handleStopTimer = () => {
        const savedTime = stopTimer();
        editTask({taskIndex: index, task: {time : savedTime}});
        onCloseModal();
    }
    

    return (
        <div className={s['timer-container']}>
            <p className={s.timer}>{parseSecondsToHms(time)}</p>
            <Button onClick={handleStopTimer} >Stop</Button>
        </div>
    );
};

export default TaskTimer;