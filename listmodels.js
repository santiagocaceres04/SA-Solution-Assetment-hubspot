require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    console.log("📡 Fetching available Gemini models...");

    const resp = await axios.get(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    console.log("\n🧠 AVAILABLE MODELS:");
    resp.data.models.forEach((m) => console.log("➡️", m.name));
  } catch (err) {
    console.error("❌ ERROR:", err.response?.data || err.message);
  }
})();
