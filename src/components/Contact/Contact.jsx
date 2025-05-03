import { FaPhone } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact: { name, number, id } }) => {
  const dispath = useDispatch();

  const deleteUser = () => {
    dispath(deleteContact(id));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.contactInfo}>
        <div className={s.contactData}>
          <BsPeopleFill />
          <p>{name}</p>
        </div>
        <div className={s.contactData}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.buttonDelete} onClick={deleteUser}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
