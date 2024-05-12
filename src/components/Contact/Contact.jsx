import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import css from './Contact.module.css'

function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.card} id={id}>
            <ul className={css.cardList}>
                <li><FaUser />{name}</li>
                <li><BsFillTelephoneFill />{number}</li>
            </ul>
            <button
                className={css.cardBtn}
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Contact