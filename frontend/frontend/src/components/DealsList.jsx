import { useState, useEffect } from "react";
import { getDealsByContact } from "../api/hubspotApi";

export default function DealsList({ contactId }) {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    if (contactId) {
      getDealsByContact(contactId).then(setDeals);
    }
  }, [contactId]);

  return (
    <div>
      <h2>Deals</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stage</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((d) => (
            <tr key={d.id}>
              <td>{d.properties.dealname}</td>
              <td>{d.properties.dealstage}</td>
              <td>{d.properties.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
