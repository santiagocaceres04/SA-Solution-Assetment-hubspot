# 🌀 HubSpot Integration POC – Breezy Air Systems  
**Solution Architect Technical Assessment**
📌 A. Project Overview

This Proof of Concept demonstrates an end-to-end integration between:

A Node.js backend

A React + Vite frontend

HubSpot CRM API (Contacts + Deals)

Gemini 2.5 Flash AI model

The goal is to show Breezy how CRM data, AI insights, and app workflows can be unified in a single experience without feeling like disconnected systems.

You will see:

✔ Sync of Contacts and Deals
✔ Associations between CRM objects
✔ Real-time AI insights
✔ A recommended HubSpot Data Architecture
✔ A sales pipeline aligned to Breezy’s HVAC business

🛠️ B. Setup Instructions
1. Backend Setup (Node.js)
Navigate to backend folder
cd backend

Install dependencies
npm install

Install Gemini SDK
npm install @google/generative-ai

Create .env
GEMINI_API_KEY=your_google_api_key_here
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here

Run backend
node server.js


Backend will run at:
👉 http://localhost:3001

2. Frontend Setup (React + Vite)
Navigate to frontend
cd frontend

Install dependencies
npm install

Run the frontend
npm run dev


Frontend will run at:
👉 http://localhost:5173

3. Prerequisites

Node.js v18+

NPM v9+

HubSpot Private App Token

Google AI Studio Key (Gemini)

Browser (Chrome/Edge)

4. How to Test the Integration Flow

Start the backend

Start the frontend

Create a contact → appears in HubSpot

Create a deal → associated to a contact

Go to AI Insights page

Click Generate Insight

Gemini analyzes CRM data (Contacts + Deals) and returns insights

Simple, fast, and complete.

🤖 C. AI Usage Documentation
1. AI Tools Used

Gemini 2.5 Flash

@google/generative-ai SDK

2. Tasks AI Was Used For

Generate insights from Contacts + Deals

Summaries of customer activity

Deal risk explanations

Pattern detection in the sales pipeline

3. What Was Learned / Challenges

Choosing the correct model version is key (some are better for reasoning, others for text).

Clean CRM data must be formatted before sending it to the AI.

Prompt engineering significantly improves the insight quality.

4. How AI Helped
Pros

Extremely fast analysis (seconds vs hours).

Summaries that save time for sales teams.

Detects patterns humans can miss.

Cons

Requires human review; AI is not 100% accurate.

Incorrect prompts generate irrelevant insights.

🏗 D. HubSpot Data Architecture

Below is the complete answer for Part 2 of the assessment.

1. Entity Relationship Diagram (ERD)

📌 Insert ERD PNG here:
/assets/erd.png

ERD Description

Contacts — represent customers

Deals — represent opportunities

Associations — 1 Contact → N Deals

This model is simplified intentionally to match Breezy's POC scope.

2. Deal Pipeline Architecture

📌 Insert Sales Pipeline PNG here:
/assets/pipeline.png

Suggested HVAC Sales Pipeline

Lead Captured

Qualification

Needs Assessment

Quote Sent

Negotiation

Scheduled Installation

Won

Lost

This pipeline reflects real HVAC business processes.

🌟 E. (Optional) AI Feature Explanation
AI-Powered Feature: Commercial Insights

This feature analyzes:

Contacts + Deals

Pipeline performance

Customer behaviors

Sales patterns

Why This Feature?

Sales decision-making is improved when insights arrive instantly, not days later.

How It Makes the Integration Smarter

Accelerates decision-making

Enhances mapping and workflow intelligence

Learns from sales activity

Identifies opportunities automatically

AI vs Rules/Logic
Use Case	AI	Traditional Logic
Data validation	❌	✔
Sync and transformations	❌	✔
Insight generation	✔	❌
Pattern detection	✔	❌

AI complements, not replaces, business logic.

⚙ F. Design Decisions
Technical Choices

Node.js + Express → fast API integration

React + Vite → lightweight and modern

Gemini AI → excellent reasoning and summarization

HubSpot API v3 → reliable structure

Assumptions About Breezy’s Platform

They sell HVAC products (AC units).

HubSpot is their CRM of choice.

They need insight automation.

They want frictionless CRM + app integration.

Improvements with More Time

Train prompts for deeper insights

Build dashboards for analytics

Add more objects (Installations, Tickets, Products)

Expand workflows and automations

Questions for the Client Before Production

How many leads per month?

What are the peak seasons?

How fast should insights load?

Required SLAs for the integration?

Which teams will use the insights?
