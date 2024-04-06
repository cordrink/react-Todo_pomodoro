import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";
import TasksContextProvider from "./Contexts/TasksContexts";

const App = () => {

    return (
        <>
            <Header/>
            <TasksContextProvider>
                <section className='container' style={{position: 'relative'}}>
                    <Tasks/>
                </section>
            </TasksContextProvider>
        </>

    );
};

export default App;