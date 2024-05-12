import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я повинно мати мінімум 3 символи!")
    .max(50, "Максимальний розмір імені 50 символів!")
    .required("Це обов'язкове поле для заповнення!"),
  number: Yup.string()
    .min(3, "Мінімальний розмір номеру 3 символи!")
    .max(50, "Максимальний розмір номеру 50 символів!")
    .required("Це обов'язкове поле для заповнення!"),
});

function ContactForm({ addContact }) {

    const fieldId = useId();

    const handleSubmit = (values, actions) => {
        addContact({ id: nanoid(5), ...values });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ name: "", number: ""}}
            onSubmit={handleSubmit}
            validationSchema={UserSchema}
        >
            <Form
                className={css.form}>
                <label
                    htmlFor={fieldId + '-name'}
                    className={css.label}>
                    Name
                </label>
                <Field
                    id={fieldId + '-name'}
                    className={css.field}
                    type="text"
                    name="name"
                />
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />
                <label
                    htmlFor={fieldId + '-number'}
                    className={css.label}>
                    Number
                </label>
                <Field
                    id={fieldId + '-number'}
                    className={css.field}
                    type="text"
                    name="number"
                />
                <ErrorMessage
                    className={css.error}
                    name="number"
                    component="span"
                />
                <button
                    className={css.button}
                    type="submit">
                    Add contact
                </button>
			</Form>
        </Formik>

    );
}

export default ContactForm