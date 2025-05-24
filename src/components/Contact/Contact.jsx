import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contactInfo }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contactInfo.id));

  return (
    <>
      <div>
        <p>{contactInfo.name}</p>
        <p>{contactInfo.number}</p>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </>
  );
}
