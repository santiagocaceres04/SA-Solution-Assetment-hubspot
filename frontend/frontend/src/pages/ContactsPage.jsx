import { useState, useEffect } from "react";

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  // Fetch contacts
  const fetchContacts = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:3001/api/contacts");
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      setContacts(data.results || []);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createContact = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3001/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ properties: form }),
      });

      if (!res.ok) throw new Error("Failed to create contact");

      setSuccess("Contact created successfully!");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
      });

      fetchContacts();
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Contacts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <h3>HubSpot Synced Contacts</h3>
      <table border="1" width="100%" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i}>
              <td>{c.properties.firstname}</td>
              <td>{c.properties.lastname}</td>
              <td>{c.properties.email}</td>
              <td>{c.properties.jobtitle || "-"}</td>
              <td>{c.properties.company || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Create Contact</h3>
      <input name="firstname" placeholder="First Name" onChange={handleChange} value={form.firstname} /><br />
      <input name="lastname" placeholder="Last Name" onChange={handleChange} value={form.lastname} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} /><br />
      <input name="phone" placeholder="Phone (Optional)" onChange={handleChange} value={form.phone} /><br />
      <input name="address" placeholder="Address (Optional)" onChange={handleChange} value={form.address} /><br />

      <button onClick={createContact}>Create Contact</button>
    </div>
  );
}

export default ContactsPage;
