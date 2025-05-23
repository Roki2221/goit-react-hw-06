import { useState } from "react";
import ContactForm from "./ContactFrom/ContactForm";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contactsData, setContactsData] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const AddContact = (newContact) => {
    setContactsData((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (NumberId) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((item) => item.id !== NumberId);
    });
  };

  const visibleNumber = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleNumber);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        onDelete={deleteContact}
        contactsData={visibleNumber}
      ></ContactList>
    </>
  );
}

export default App;
