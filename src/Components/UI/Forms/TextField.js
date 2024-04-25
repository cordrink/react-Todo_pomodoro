import s from './Fiel.module.css'
import {useEffect, useId} from "react";
import useFieldError from "../../../Hooks/useFieldError";

const TextField = ({label, name, placeholder, validation,value, onchange}) => {

    const id = useId();

    const {error, validateField} = useFieldError();

    const handleChange = (e) => {
        const {value} = e.target;
        onchange(value);
    }

    useEffect(() => {
        validateField(value, validation);
    }, [value]);

    return (
        <div className={s['input-group']}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={name} className={s.input} placeholder={placeholder} value={value} onChange={handleChange}/>
            {error && <p className={s.error}>{error}</p>}
        </div>
    )
}

export default TextField;