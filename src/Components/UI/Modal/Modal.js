import Button from "../Button/Button";
import s from "./modal.module.css"
import {createPortal} from "react-dom";

const Modal = ({title = 'Default Title', variant = 'primary', children, isOpen, setIsOpen}) => {

    return createPortal(
        isOpen && <div className={s.overlay}>
            <div className={s.modal}>
                <div className={s['modal-header']}>
                    <h3 className={s[`text-${variant}`]}>{title}</h3>
                    <Button children={'Close'} variant={"danger"} onClick={() => setIsOpen(false)} />
                </div>
                <div className={s['modal-content']}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )

}

export default Modal;