import { Field, Formik, Form } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const initiatialValue = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const username = useId();
  const usernumber = useId();
  console.log(username, usernumber);
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initiatialValue} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={username}>Name</label>
          <Field type="text" id={username} name="name"></Field>
          <label htmlFor={usernumber}>Number</label>
          <Field type="number" id={usernumber} name="number"></Field>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
