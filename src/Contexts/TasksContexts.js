import {createContext, useReducer} from "react";

const TasksContexts = createContext({
    taskData: {
        tasks: [],
        count: 0,
    },
    addTask: (task) => {},
    removeTask: (taskIndex) => {},
    toggleTaskIsDone: ({taskIndex, isDone}) => {},
    editTask: ({taskIndex, task}) => {}
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
    return state ? state : INITIAL_TASKS;
}




const TasksContextProvider = ({children}) => {
    const [taskData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS );

    const addTask = (task) => {
        dispatchTasks({ type:'ADD_TASK', value: task });
    }

    const value = {
        taskData,
        addTask
    };

    return (
      <TasksContexts.Provider value={ value }>
          { children }
      </TasksContexts.Provider>
    );
}

export default TasksContextProvider;