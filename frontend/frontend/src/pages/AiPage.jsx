import React, { useState } from "react";
import { generateAIInsights } from "../api/aiApi";
import { getContacts, getDealsForContact } from "../api/hubspotApi";

const AiPage = () => {
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setInsight("⌛ Loading data...");

      // 1. Obtener contactos
      const contactsResp = await getContacts();
      const contacts = contactsResp.results || [];

      // 2. Obtener deals por cada contacto
      let allDeals = [];

      for (const contact of contacts) {
        const contactId = contact.id;
        if (!contactId) continue;

        try {
          const dealsResp = await getDealsForContact(contactId);
          const deals = dealsResp.results || [];
          allDeals.push(...deals);
        } catch (err) {
          console.error(`❌ Error cargando deals para contacto ${contactId}`, err);
        }
      }

      setInsight("🤖 Generating AI insight...");

      // 3. Enviar todo a Gemini vía backend
      const aiResp = await generateAIInsights(contacts, allDeals);

      setInsight(aiResp.insight || "⚠ No insight generated.");
    } catch (error) {
      console.error("❌ Error general:", error);
      setInsight("❌ Error generating insight.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 AI Powered Insights (Gemini 2.5 Pro)</h1>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "#007bff",
          color: "white",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Insight"}
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <h2>Insight:</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{insight}</p>
      </div>
    </div>
  );
};

export default AiPage;
