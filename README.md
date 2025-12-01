# 🌀 HubSpot Integration POC – Breezy Air Systems  
**Solution Architect Technical Assessment**

A. Setup Instructions
1. How to Run the Application Locally
Backend
cd backend
npm install
npm install @google/generative-ai
node server.js


Backend will be available at:
👉 http://localhost:3001

Frontend
cd frontend
npm install
npm run dev


Frontend will be available at:
👉 http://localhost:5173

2. Dependencies / Prerequisites

Node.js 18+

NPM 9+

HubSpot Private App Token

Google AI Studio API Key (Gemini)

Modern browser (Chrome, Edge, Firefox)

Vite + React

Express.js

Axios

3. Required Environment Variables

Create a .env file inside the backend folder:

GEMINI_API_KEY=your_google_ai_key_here
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here

4. How to Test the Integration Flow

Open the frontend.

Create a contact from the Contacts page.

Create a deal and associate it with a contact from the Deals page.

Go to AI Insights.

Click Generate Insight.

The backend will:

Fetch contacts + deals from HubSpot

Send them to Gemini 2.5 Flash

Generate a commercial insight

Return the insight to the frontend

🔵 B. Project Overview

This Proof of Concept (POC) demonstrates:

✔ A full integration between:

A transactional application (custom backend)

HubSpot CRM (Contacts + Deals)

A React frontend that manages and displays CRM data

✔ Goal of the POC

Create an integration where HubSpot does not feel like a separate system, but part of Breezy’s business workflow.

✔ AI Use Case

Gemini 2.5 Flash was used to analyze CRM data and generate:

Sales insights

Deal summaries

Customer behavior analysis

Pipeline opportunity interpretation

This validates how AI can enhance HubSpot integrations.

🔮 C. AI Usage Documentation
1. AI Tools Used

Gemini 2.5 Flash

Official SDK: @google/generative-ai

2. Tasks AI Was Used For

Generating insights based on Contacts + Deals

Sales summaries

Explaining deals and identifying risks

Detecting patterns in the sales pipeline

3. What Did You Learn? What Was Challenging?

Choosing the right model in the SDK was challenging — some models perform better for structured analysis, others for narrative output.

Key takeaway:

With the right prompt engineering, Gemini can produce highly actionable insights.

Another challenge was cleaning and preparing CRM JSON responses before sending them to the model.

4. How Did AI Help (or Not Help)?
Benefits

Processes and analyzes data in seconds (vs hours/days for a human).

Summarizes large amounts of CRM data efficiently.

Identifies patterns and offers explanations.

Limitations

AI is not 100% accurate → results need human validation.

If the prompt is not controlled, the AI may infer non-existent information.

🏗 D. HubSpot Data Architecture

This section contains:

Entity Relationship Diagram (ERD)

Deal Pipeline Architecture

📘 1. Entity Relationship Diagram (ERD)

📌 Insert ERD image here
/assets/erd.png

Key Objects

Contacts – Final customer

Deals – Commercial opportunities

Associations:

Contact ↔ Deals = 1:N

Why This Architecture?

The assessment requires a minimal POC.
To avoid unnecessary complexity, objects like Companies, Tickets, Products, or Installation Jobs were intentionally excluded.

The final model reflects exactly what the project needs — no more, no less.

📈 2. Deal Pipeline Architecture

📌 Insert Pipeline Diagram here
/assets/pipeline.png

Recommended pipeline for Breezy (HVAC business):

Lead Captured

Qualification

Needs Assessment

Quote Sent

Negotiation

Scheduled Installation

Won

Lost

This pipeline aligns with the real customer journey of an HVAC business.

🤖 E. (Optional) AI Feature Explanation
AI-Powered Feature

A module that generates real-time commercial insights based on CRM data.

Produces:

Customer briefs

Deal risk alerts

Opportunities for upsell/cross-sell

Actionable recommendations

Pattern detection within the pipeline

Why This Feature?

Data analysis is essential in any commercial process.
AI dramatically reduces the time needed to evaluate opportunities and customers.

How Does It Make the Integration Smarter?

Enables instant decision-making

Provides intelligent field mapping

Offers automated pattern recognition

Learns over time from transactional behavior

AI vs Traditional Logic — When to Use Each?
AI is ideal for:

Post-integration analysis

Insight generation

Pattern detection

Natural language summaries

Traditional rules/logic are ideal for:

Data validation

Error handling

Mapping and transformation

Sync logic

AI does not replace business logic — it enhances the integration.

⚙ F. Design Decisions
1. Technical Choices & Why

Node.js + Express → Fast and simple for REST integrations

React + Vite → Modern, lightweight, and scalable frontend

Gemini AI → Excellent for summarization and data reasoning

HubSpot CRM API v3 → Stable and modern API

2. Assumptions About Breezy’s Platform

Breezy sells and installs air conditioners (HVAC business).

They have a defined sales pipeline.

They want HubSpot fully embedded into their workflow.

They need fast data insights for decision-making.

3. What I Would Improve With More Time

Fine-tune prompts and models for deeper commercial insights

Add dashboards for analytics and insight visualization

Expand the data model:

Installation jobs

Service tickets

Product catalog

Improve the UX for contact/deal management

Handle more edge cases in the integration

4. Questions to Ask Before a Production Build

How many leads per month do you expect?

How fast does insight generation need to be?

What are the seasonal sales peaks?

Do we need auto-scaling during peak seasons?

What SLAs must the integration meet?

Which teams will consume these insights?
