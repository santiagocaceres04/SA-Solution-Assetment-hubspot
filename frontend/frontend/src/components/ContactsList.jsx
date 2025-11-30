import { useEffect, useState } from "react";
import { getContacts } from "../api/hubspotApi";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>{c.properties.firstname} {c.properties.lastname}</td>
              <td>{c.properties.email}</td>
              <td>{c.properties.jobtitle}</td>
              <td>{c.properties.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
