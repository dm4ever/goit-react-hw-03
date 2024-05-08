import { Formik } from 'formik'
import Contact from '../Contact/Contact'

function ContactList({ contacts }) {
    return (
        <div>
            {contacts.map((contact) => (
                <li key={contact.id}><Contact data={contact} /></li>
        ))}
        </div>
    )
 }

export default ContactList