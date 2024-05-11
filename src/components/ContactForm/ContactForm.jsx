import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useId } from 'react';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 50 символів!")
    .required("Це обов'язкове поле!"),
  number: Yup.string()
    .min(9, "Має бути у форматі пошти!")
    .required("Це обов'язкове поле!"),
});


function ContactForm({ addContact }) {

    const contactId = useId();

    const handleSubmit = (values, actions) => {
        addContact(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialContacts={{ name: "", number: "", id: "" }}
            onSubmit={handleSubmit}
            validationSchema={UserSchema}>
            <Form className={css.form}>
                <label htmlFor={contactId + 'name'} className={css.label}>Name</label>
                <Field id={contactId + 'name'} className={css.field} type="text" name="name" />
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />
                <label htmlFor={contactId + 'number'} className={css.label}>Number</label>
                <Field id={contactId + 'number'} className={css.field} type="text" name="number" />
                <button className={css.button} type="submit">Add contact</button>
                <ErrorMessage
                    className={css.error}
                    name="username"
                    component="span"
                />
			</Form>
        </Formik>

    );
};

export default ContactForm