import { Formik, Form, Field } from "formik";

export default function SearchBox({ value, onFilter }) {
  return (
    <Formik>
      <Form>
        <Field
          type="text"
          value={value}
          onChange={(e) => {
            onFilter(e.target.value);
          }}
        ></Field>
      </Form>
    </Formik>
  );
}
