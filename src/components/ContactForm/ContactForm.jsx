import { Formik, Form, Field } from 'formik'
import * as Yup from "yup";
import { nanoid } from 'nanoid';


function ContactForm() {
    return (
        <Formik initialValues={{}} onSubmit={() => { }}>
            <Form>
                <label>Name</label>
                <Field type="text" name="name" />
                <label>Number</label>
                <Field type="text" name="number" />
				<button type="submit">Add contact</button>
			</Form>
        </Formik>

    );
};

export default ContactForm