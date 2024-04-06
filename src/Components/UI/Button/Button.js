import s from './Button.module.css'

const Button = ({type = 'button', variant = 'primary', onClick, children}) => {
    return (
        <button className={`${s.btn} ${s[variant]}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;