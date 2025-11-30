import { useState } from "react";
import { createContact } from "../api/hubspotApi";

function CreateContact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating...");

    try {
      await createContact(form);
      setStatus("Contact created successfully!");
      setForm({ firstname: "", lastname: "", email: "" });
    } catch (error) {
      setStatus("Error creating contact.");
    }
  };

  return (
    <div>
      <h3>Create Contact</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={form.firstname}
          onChange={(e) => setForm({ ...form, firstname: e.target.value })}
        />
        <input
          placeholder="Last Name"
          value={form.lastname}
          onChange={(e) => setForm({ ...form, lastname: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default CreateContact;
