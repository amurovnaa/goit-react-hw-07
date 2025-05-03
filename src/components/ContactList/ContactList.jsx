import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const getFilteredContacts = (userContacts, filterValue) => {
  if (filterValue !== "") {
    return userContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
    );
  }
  return userContacts;
};

export const ContactList = () => {
  const userContacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const filteredContacts = getFilteredContacts(userContacts, filterValue);
  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
