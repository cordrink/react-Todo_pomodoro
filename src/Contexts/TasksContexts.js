import {createContext, useReducer} from "react";

const TasksContexts = createContext({
    taskData: {
        tasks: [],
        count: 0,
    },
    addTask: (task) => {},
    removeTask: (taskIndex) => {},
    toggleTaskIsDone: ({taskIndex, isDone}) => {},
    editTask: ({taskIndex, task}) => {},
    launchTimer: ({taskIndex}) => {}
});

export {TasksContexts};

const INITIAL_TASKS = ({
    tasks: [],
    count: 0,
});

const tasksReducer = (state, action) => {
    if (action.type === 'ADD_TASK' && action.value) {
        const tasks = [...state.tasks, action.value];
        return {
            tasks,
            count: tasks.length
        }
    }

    if (action.type === 'REMOVE_TASK' && !isNaN(+action.value)) {
        const tasks = [...state.tasks];
        tasks.splice(+action.value, 1);
        return {
            tasks,
            count: tasks.length
        }
    }

    if (action.type === 'EDIT_TASK' && action.value && !isNaN(+action.value.taskIndex)) {
        const tasks = [...state.tasks];
        tasks[+action.value.taskIndex] = {
            ...tasks[+action.value.taskIndex],
            ...action.value.task
        }
        return {
            tasks,
            count: tasks.length,
        }
    }

    if (action.type === 'TOGGLE_STATUS' && action.value && !isNaN(+action.value.taskIndex)) {
        const tasks = [...state.tasks];
        tasks[+action.value.taskIndex] = {
            ...tasks[+action.value.taskIndex],
            isDone: action.value.isDone,
        }
        return {
            tasks
        }
    }
    return state ? state : INITIAL_TASKS;
}




const TasksContextProvider = ({children}) => {
    const [taskData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS );

    const addTask = (task) => {
        dispatchTasks({ type:'ADD_TASK', value: task });
    };

    const removeTask = (taskIndex) => {
        dispatchTasks({type: 'REMOVE_TASK', value: taskIndex})
    };

    const editTask = ({taskIndex, task}) => {
        dispatchTasks({type: 'EDIT_TASK', value: {taskIndex, task}});
    };
    const toggleTaskIsDone = ({taskIndex, isDone}) => {
        dispatchTasks({type: 'TOGGLE_STATUS', value: {taskIndex, isDone}})
    }

    const value = {
        taskData,
        addTask,
        removeTask,
        editTask,
        toggleTaskIsDone
    };


    return (
      <TasksContexts.Provider value={ value }>
          { children }
      </TasksContexts.Provider>
    );
}

export default TasksContextProvider;