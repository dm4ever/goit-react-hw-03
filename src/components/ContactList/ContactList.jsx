import { Formik } from 'formik'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { nanoid } from 'nanoid';

function ContactList({ contacts }) {
    // contact.id = nanoid(4);
    return (
        <div className={css.contactList}>
            {contacts.map((contact) => (
                <li key={contact.id}><Contact data={contact} /></li>
            ))}
        </div>
    );
};

export default ContactList