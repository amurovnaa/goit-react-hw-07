import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = localStorage.getItem("contacts");
  //   return storedContacts
  //     ? JSON.parse(storedContacts)
  //     : [
  //         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //       ];
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = (newContact) => {
  //   if (
  //     contacts.some(
  //       (contact) =>
  //         contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`You already have ${newContact.name} contact`);
  //     return;
  //   }
  //   setContacts((prevContacts) => [
  //     ...prevContacts,
  //     { id: nanoid(), ...newContact },
  //   ]);
  // };

  // const handleFilterChange = (value) => {
  //   setFilter(value);
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  // );
  // const handleDeleteContact = (contactId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== contactId)
  //   );
  // };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
