import { useState } from "react";
import { createDeal } from "../api/hubspotApi";

function CreateDeal() {
  const [form, setForm] = useState({
    dealname: "",
    amount: "",
    pipeline: "default",
    dealstage: "appointmentscheduled"
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating deal...");

    try {
      await createDeal(form);
      setStatus("✅ Deal created successfully!");
      setForm({
        dealname: "",
        amount: "",
        pipeline: "default",
        dealstage: "appointmentscheduled"
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error creating deal.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Create Deal</h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexDirection: "column", maxWidth: "300px" }}>
        
        <input
          placeholder="Deal Name"
          value={form.dealname}
          onChange={e => setForm({ ...form, dealname: e.target.value })}
        />

        <input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
        />

        <select
          value={form.pipeline}
          onChange={e => setForm({ ...form, pipeline: e.target.value })}
        >
          <option value="default">Default Pipeline</option>
        </select>

        <select
          value={form.dealstage}
          onChange={e => setForm({ ...form, dealstage: e.target.value })}
        >
          <option value="appointmentscheduled">Appointment Scheduled</option>
          <option value="qualifiedtobuy">Qualified To Buy</option>
          <option value="presentationscheduled">Presentation Scheduled</option>
          <option value="decisionmakerboughtin">Decision Maker Bought In</option>
          <option value="contractsent">Contract Sent</option>
          <option value="closedwon">Closed Won</option>
          <option value="closedlost">Closed Lost</option>
        </select>

        <button type="submit">Create Deal</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default CreateDeal;
