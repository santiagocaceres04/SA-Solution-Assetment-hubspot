import { useEffect, useState } from "react";

function DealsPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const [dealName, setDealName] = useState("");
  const [amount, setAmount] = useState("");

  const [deals, setDeals] = useState([]);
  const [loadingDeals, setLoadingDeals] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  // ===========================
  // 1. Load contacts on mount
  // ===========================
  useEffect(() => {
    fetch("http://localhost:3001/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.results);
        if (data.results.length > 0) {
          setSelectedContact(data.results[0].id);
        }
      })
      .catch(() => setError("Error loading contacts"));
  }, []);

  // ===========================
  // 2. Load deals for a contact
  // ===========================
  useEffect(() => {
    if (!selectedContact) return;

    setLoadingDeals(true);
    fetch(`http://localhost:3001/api/contacts/${selectedContact}/deals`)
      .then((res) => res.json())
      .then((data) => {
        setDeals(data.results || []);
        setLoadingDeals(false);
      })
      .catch(() => {
        setError("Error loading deals");
        setLoadingDeals(false);
      });
  }, [selectedContact]);

  // ===========================
  // 3. Create a deal
  // ===========================
  async function createDeal() {
    if (!dealName || !amount) {
      setError("Please complete all fields");
      return;
    }

    const payload = {
      dealProperties: {
        dealname: dealName,
        amount: amount,
        dealstage: "closedwon", // FIXED
      },
      contactId: selectedContact,
    };

    try {
      const res = await fetch("http://localhost:3001/api/deals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error creating deal");

      setSuccessMessage("Deal created successfully!");
      setDealName("");
      setAmount("");

      // Refresh deals
      const refresh = await fetch(
        `http://localhost:3001/api/contacts/${selectedContact}/deals`
      );
      const data = await refresh.json();
      setDeals(data.results || []);

      setTimeout(() => setSuccessMessage(""), 2500);
    } catch (err) {
      setError("Error creating deal");
      setTimeout(() => setError(""), 2500);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Deals</h1>

      {/* Contact selector */}
      <label style={{ fontSize: "18px" }}>Select Contact: </label>
      <select
        value={selectedContact || ""}
        onChange={(e) => setSelectedContact(e.target.value)}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        {contacts.map((c) => (
          <option key={c.id} value={c.id}>
            {c.properties.firstname} {c.properties.lastname}
          </option>
        ))}
      </select>

      <h2 style={{ marginTop: "30px" }}>Create Subscription Deal</h2>

      {/* Form */}
      <div style={{ maxWidth: "300px" }}>
        <input
          placeholder="Deal Name"
          value={dealName}
          onChange={(e) => setDealName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        {/* Stage (fixed) */}
        <select
          disabled
          value="closedwon"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#e9e9e9",
            cursor: "not-allowed",
            marginBottom: "10px",
          }}
        >
          <option value="closedwon">closedwon</option>
        </select>

        <button
          onClick={createDeal}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0b5ed7",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create Deal
        </button>
      </div>

      {/* Success & Error */}
      {successMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Deals table */}
      <h2 style={{ marginTop: "40px" }}>Deals for Contact</h2>

      {loadingDeals ? (
        <p>Loading deals...</p>
      ) : (
        <table
          style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Deal Name</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Stage</th>
            </tr>
          </thead>
          <tbody>
            {deals.length === 0 ? (
              <tr>
                <td colSpan="3" style={tdEmpty}>No deals found</td>
              </tr>
            ) : (
              deals.map((d) => (
                <tr key={d.id}>
                  <td style={tdStyle}>{d.properties.dealname}</td>
                  <td style={tdStyle}>${d.properties.amount}</td>
                  <td style={tdStyle}>{d.properties.dealstage}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Table styles
const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

const tdEmpty = {
  padding: "15px",
  textAlign: "center",
  color: "#888",
  border: "1px solid #ccc",
};

export default DealsPage;
