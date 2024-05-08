import { Formik } from 'formik'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import './Contact.module.css'


function Contact({ data: { id, name, number } }) {
    return (
        <div id={id} className={css.card}>
            <ul>
                <li><FaUser /> {name}</li>
                <li><span><BsFillTelephoneFill /></span> {number}</li>
            </ul>
            <button>Delete</button>
        </div>
    )
 }

export default Contact