import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
export default function SearchBox() {
  const filterValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Formik>
      <Form>
        <Field type="text" value={filterValue} onChange={onFilter}></Field>
      </Form>
    </Formik>
  );
}
