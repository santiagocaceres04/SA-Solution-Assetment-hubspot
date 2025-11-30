const API_URL = "http://localhost:3001/api/ai";

export async function generateAIInsights(contacts, deals) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contacts, deals }),
    });

    if (!response.ok) {
      throw new Error("AI request failed");
    }

    return await response.json();
  } catch (err) {
    console.error("AI API error:", err);
    throw err;
  }
}
