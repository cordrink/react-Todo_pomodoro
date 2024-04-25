import s from "./TasksTable.module.css"
import TaskRow from "./TaskRow";
import {TasksContexts} from "../../../Contexts/TasksContexts";
import {useContext} from "react";

const TasksTable = () => {
    const {taskData} = useContext(TasksContexts);

    return (
        <div>
            <div className={s['task-table-container']}>
                <table className={s['tasks-table']}>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>created at</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            taskData && taskData.tasks && taskData.tasks.map((task, index) => (
                                <TaskRow key={Date.parse(task.createdAt) - index } index={index} task={task}/>
                            ) )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TasksTable;