import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
export default function ContactList() {
  const contactsData = useSelector(state => state.contacts.items);
  return (
    <ul>
      {contactsData.map(item => {
        return (
          <li key={item.id}>
            <Contact contactInfo={item}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
