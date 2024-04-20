import Button from "../../UI/Button/Button";
import {useContext, useState} from "react";
import {TasksContexts} from "../../../Contexts/TasksContexts";
import Modal from "../../UI/Modal/Modal";
import TaskForm from "../TaskForm";

const TaskRow = ({task, index}) => {

    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);

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
                <td style={{display: 'flex', gap: 4, justifyContent: 'flex-end'}}>
                    <Button variant={"danger"} onClick={handleDeleteTask}>Delete</Button>
                    <Button onClick={() => setIsEditTaskModalOpen(true) }>Edit</Button>
                </td>
                <Modal isOpen={isEditTaskModalOpen} setIsOpen={setIsEditTaskModalOpen} title={task.title}>
                    <TaskForm closeModal={() => setIsEditTaskModalOpen(false) } value={{title: task.title, description: task.description}} index={index} />
                </Modal>
            </tr>
        </>
    );
}

export default TaskRow;