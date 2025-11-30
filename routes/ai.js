import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

router.post("/insights", async (req, res) => {
  try {
    const { contacts, deals } = req.body;

    const prompt = `
      Analyze the following CRM data and generate ONE short, actionable business insight.

      Contacts:
      ${JSON.stringify(contacts, null, 2)}

      Deals:
      ${JSON.stringify(deals, null, 2)}

      Requirements:
      - Max 4 sentences
      - Simple business language
      - Focus on conversion, churn, subscription behavior or revenue
    `;

    const result = await model.generateContent(prompt);
    res.json({ insight: result.response.text() });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI processing failed", details: error.message });
  }
});

export default router;
