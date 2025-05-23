import Contact from "../../Contact/Contact";

export default function ContactList({ onDelete, contactsData }) {
  return (
    <ul>
      {contactsData.map((item) => {
        return (
          <li key={item.id}>
            <Contact onDelete={onDelete} contactInfo={item}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
