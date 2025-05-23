import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { contactss, filterr } = useSelector(state => {
    return state;
  });

  const dispatch = useDispatch();
  // console.log(date);
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      const localContacts = {
        ...JSON.parse(localStorage.getItem('contacts')),
      };
      dispatch({ type: 'addContact', payload: [localContacts] });
    }
  });

  useEffect(
    prev => {
      if (contacts !== prev) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const searchValue = value => {
    setFilter(value);
  };

  const contactsSort = () => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const handleSubmit = data => {
    console.log(data);
    if (
      contacts
        .map(el => el.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts([
      ...contacts,
      { name: data.name, number: data.number, id: nanoid() },
    ]);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={searchValue} />
      <ContactList sortedList={contactsSort()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
