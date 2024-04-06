import {useId} from "react";
import s from "./Fiel.module.css";
import useFieldError from "../../../Hooks/useFieldError";

const TextareaField = ({label, name, placeholder, validation,value, onchange}) => {
    const id = useId();

    const {error, validateField} = useFieldError();

    const handleChange = (e) => {
        const {value} = e.target;
        // Gestion d'erreur
        validateField(value ,validation);
        onchange(value)
    }

    return (
        <div className={s['input-group']}>
            <label htmlFor={id}>{label}</label>
            <textarea name={name} id={id} cols="30" rows="10" className={s.input} placeholder={placeholder} value={value} onChange={handleChange}></textarea>
            {error && <p className={s.error}>{error}</p>}
        </div>
    )
}

export default TextareaField;