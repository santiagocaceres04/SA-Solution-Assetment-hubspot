// src/App.jsx
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import ContactsPage from "./pages/ContactsPage";
import DealsPage from "./pages/DealsPage";
import AiPage from "./pages/AiPage";

function App() {
  const [page, setPage] = useState("dashboard");
  const [contacts, setContacts] = useState([]);

  // Load contacts on app start
  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/contacts");
      const data = await res.json();

      setContacts(data.results || data || []);
    } catch (err) {
      console.error("Error loading contacts:", err);
    }
  };

  function renderPage() {
    switch (page) {
      case "contacts":
        return (
          <ContactsPage
            contacts={contacts}
            reloadContacts={loadContacts}
          />
        );

      case "deals":
        return <DealsPage contacts={contacts} />;

      case "ai":
        // OPTIONAL: pass contacts to AI page
        return <AiPage contacts={contacts} />;

      default:
        return <Dashboard />;
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Breezy ⚡ HubSpot Integration POC</h1>

      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("contacts")}>Contacts</button>
        <button onClick={() => setPage("deals")}>Deals</button>
        <button onClick={() => setPage("ai")}>AI Insights</button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
