import {useContext, useState} from "react";
import TextField from "../UI/Forms/TextField";
import TextareaField from "../UI/Forms/TextareaField";
import Button from "../UI/Button/Button";
import {TasksContexts} from "../../Contexts/TasksContexts";

const TaskForm = ({closeModal}) => {

    const [formValue, setFormValue] = useState({
        title: '',
        description: '',
    });

    const {addTask} = useContext(TasksContexts);

    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({
            ...formValue,
            createdAt: new Date(),
        })
        // Fermer la modal
        closeModal();
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                name={'title'}
                placeholder={'Nouvel tache'}
                label={'Title'}
                value={formValue.title}
                onchange={value => setFormValue({...formValue, title: value})}
                validation={{
                    type: 'string',
                    required: true,
                    minLength: 2,
                    maxLength: 25
                }}
            />
            <TextareaField
                name={'description'}
                placeholder={'ecrire ta description'}
                label={'Description'}
                value={formValue.description}
                onchange={value => setFormValue({...formValue, description: value})}
                validation={{
                    required: true,
                    type: 'string',
                    maxLength: 100
                }}
            />
            <Button type={'submit'} >Save</Button>
        </form>
    )
}

export default TaskForm;