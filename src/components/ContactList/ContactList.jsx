import React, { useState, useEffect } from 'react';
import ContactRow from '../ContactRow/ContactRow';
import axios from 'axios';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
    .then((data) => {
      {
      console.log (data.data);
      setContacts(data.data);
      }
    })
    .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3" style={{ border: "1px solid black" }}>
            ContactList
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
