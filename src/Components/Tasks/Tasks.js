import PageTitle from "../UI/PageTitle/PageTitle";
import Button from "../UI/Button/Button";
import s from './Tasks.module.css'
import Modal from "../UI/Modal/Modal";
import {useState} from "react";
import TaskForm from "./TaskForm";
import TasksTable from "./TasksTable/TasksTable";

const Tasks = () => {
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    return (
        <>
            <div className={s['tasks-header']}>
                <PageTitle count={ 0 } title={ 'Task' } />
                <Button children={'New Task'} onClick={() => setIsNewTaskModalOpen(true)} />
            </div>
            <TasksTable />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen}>
                <TaskForm />
            </Modal>
        </>

    );
}

export default Tasks;