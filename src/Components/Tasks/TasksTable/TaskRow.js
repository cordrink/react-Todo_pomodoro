import Button from "../../UI/Button/Button";
import {useContext, useState} from "react";
import {TasksContexts} from "../../../Contexts/TasksContexts";
import Modal from "../../UI/Modal/Modal";
import TaskForm from "../TaskForm";
import TaskTimer from "../TaskTimer/TaskTimer";
import useTimeParser from "../../../Hooks/useTimeParser";

const TaskRow = ({task, index}) => {

    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [isLaunchTimer, setIsLaunchTimer] = useState(false);

    const {parseSecondsToHms} = useTimeParser();

    const {removeTask, toggleTaskIsDone} = useContext(TasksContexts);

    const handleDeleteTask = () => {
        removeTask(index);
    }

    const handleChangeStatus = (e) => {
        const value = e.target.checked;
        toggleTaskIsDone({taskIndex: index, isDone: value})
    }

    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" checked={task.isDone} onChange={handleChangeStatus}/>
                </td>
                <td>
                    { task.title }
                </td>
                <td>
                    {task.description}
                </td>
                <td>
                    {task.createdAt.toLocaleString()}
                </td>
                <td>
                    {task.time && parseSecondsToHms(task.time)}
                </td>
                <td style={{display: 'flex', gap: 4, justifyContent: 'flex-end'}}>
                    <Button onClick={() => setIsLaunchTimer(true)} >Launch Timer</Button>
                    <Button variant={"danger"} onClick={handleDeleteTask}>Delete</Button>
                    <Button onClick={() => setIsEditTaskModalOpen(true) }>Edit</Button>
                </td>
                <Modal isOpen={isEditTaskModalOpen} setIsOpen={setIsEditTaskModalOpen} title={task.title}>
                    <TaskForm closeModal={() => setIsEditTaskModalOpen(false) } value={{title: task.title, description: task.description}} index={index} />
                </Modal>
                <Modal isOpen={isLaunchTimer} setIsOpen={setIsLaunchTimer} title={task.title}>
                    <TaskTimer index={index} onCloseModal={() => setIsLaunchTimer(false)}/>
                </Modal>
            </tr>
        </>
    );
}

export default TaskRow;