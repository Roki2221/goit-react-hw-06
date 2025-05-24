import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox({ value }) {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Formik>
      <Form>
        <Field type="text" value={value} onChange={onFilter}></Field>
      </Form>
    </Formik>
  );
}
