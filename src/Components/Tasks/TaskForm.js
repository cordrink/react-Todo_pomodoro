import {useContext, useState} from "react";
import TextField from "../UI/Forms/TextField";
import TextareaField from "../UI/Forms/TextareaField";
import Button from "../UI/Button/Button";
import {TasksContexts} from "../../Contexts/TasksContexts";

const TaskForm = ({closeModal, value, index}) => {

    const [formValue, setFormValue] = useState(value ? value :  {
        title: '',
        description: '',
    });

    // const [invalidFields, setInvalidFields] = useState([]);

    const {addTask, editTask} = useContext(TasksContexts);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*if (invalidFields.length > 0) {
            alert('There are error in the form.');
            return;
        }*/
        if (value && !isNaN(+index)){ // S'il y a une value en props => modification
            editTask({task: formValue, taskIndex: index});
        } else {
            addTask({ // Sinon => Creation
                ...formValue,
                createdAt: new Date(),
                isDone: false,
            })
        }
        // Fermer la modal
        closeModal();
    }

    /*const handleError = (error) => { // {name. error}
        const invalidFeildsCopy = [...invalidFields];
        // On recupere l'index d'un eventuel champs invalide enregistre dans le tableau
        const invalidFieldIndex = invalidFeildsCopy.findIndex(field => field === error.name);

        if (error.error) { // Si une erreur est renvoyé
            if (invalidFieldIndex === -1) { // Si le champs n'est pas enregistré comme invalide, on l'ajoute au tableau
                setInvalidFields([...invalidFeildsCopy, error.name])
            }else { // Si aucune erreur n'est renvoyé
                if (invalidFieldIndex !== -1) { // Mais que le champs est enregistré comme invalide, on le supprime du tabeau
                    invalidFeildsCopy.splice(invalidFieldIndex, 1);
                    setInvalidFields(invalidFeildsCopy);
                }
            }
        }
    }*/

    return (
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
            <Button type={'submit'}>Save</Button>
        </form>
    )
}

export default TaskForm;