import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contactsData, filter) => {
  return contactsData.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul>
      {visibleContacts.map(item => {
        return (
          <li key={item.id}>
            <Contact contactInfo={item}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
