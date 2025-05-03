import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={s.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
