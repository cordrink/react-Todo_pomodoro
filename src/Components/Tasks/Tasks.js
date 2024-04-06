import PageTitle from "../UI/PageTitle/PageTitle";
import Button from "../UI/Button/Button";
import s from './Tasks.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext, useState} from "react";
import TaskForm from "./TaskForm";
import TasksTable from "./TasksTable/TasksTable";
import {TasksContexts} from "../../Contexts/TasksContexts";

const Tasks = () => {
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    const {taskData} = useContext(TasksContexts);

    return (
        <>
            <div className={s['tasks-header']}>
                <PageTitle count={ taskData.count } title={ ` Task${taskData.count > 1 ? 's' : '' }`} />
                <Button children={'New Task'} onClick={() => setIsNewTaskModalOpen(true)} />
            </div>
            <TasksTable />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen}>
                <TaskForm closeModal={() => setIsNewTaskModalOpen(false)} />
            </Modal>
        </>

    );
}

export default Tasks;