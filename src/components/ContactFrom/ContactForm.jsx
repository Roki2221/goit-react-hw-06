import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
const initiatialValue = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const username = useId();
  const usernumber = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: Date.now() });
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
