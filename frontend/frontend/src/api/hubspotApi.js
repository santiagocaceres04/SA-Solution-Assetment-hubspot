const API_URL = "http://localhost:3001/api";

/* -------------------- CONTACTS -------------------- */

export async function getContacts() {
  const res = await fetch(`${API_URL}/contacts`);
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
}

export async function createContact(data) {
  const res = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create contact");
  return res.json();
}

/* ---------------------- DEALS ---------------------- */

export async function getDealsForContact(contactId) {
  const res = await fetch(`http://localhost:3001/api/contacts/${contactId}/deals`);
  return res.json();
}

export async function createDeal(body) {
  const res = await fetch("http://localhost:3001/api/deals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

