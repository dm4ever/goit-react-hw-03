import { Formik } from 'formik'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

function ContactList({ contacts, onDelete  }) {

    return (
        <div className={css.contactList}>
            {contacts.map((contact) => (
                <li key={contact.id}><Contact data={contact} onDelete={onDelete}/></li>
            ))}
        </div>
    );
};

export default ContactList