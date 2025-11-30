✅ README.md — HubSpot Solution Architect Technical Assessment
Breezy – HubSpot Integration POC

A Proof of Concept demonstrating CRM integration, data architecture, and AI-driven insights using HubSpot + Google Gemini.

## 1. Setup Instructions

This project contains a backend (Node.js) and frontend (React + Vite).
Follow these steps to run the solution locally.

### A. Clone the Repository
git clone https://github.com/santiagocaceres04/SA-Solution-Assetment-hubspot
cd SA-Solution-Assetment-hubspot

### B. Backend Setup
cd backend
npm install

Install Gemini SDK
npm install @google/generative-ai

Run backend
node server.js


The backend will run at:
👉 http://localhost:3001

### C. Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:
👉 http://localhost:5173

### D. Environment Variables

Create a .env file inside /backend:

GEMINI_API_KEY=your_gemini_api_key_here
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here
PORT=3001

### E. How to Test the Integration Flow

Open frontend
👉 http://localhost:5173

The flow:

Frontend loads contacts from HubSpot

For each contact, frontend loads related deals

User clicks Generate Insight

All CRM data is sent to backend

Backend sends structured prompt to Google Gemini 2.0 Pro

Gemini generates a short 3-sentence sales insight

Insight is displayed in UI

Expected output:

Contacts list

Deal list

Button to generate insights

AI response displayed

## 2. Project Overview

This POC demonstrates:

How Breezy could sync CRM data into HubSpot

How to model CRM entities correctly (Contacts, Companies, Deals)

How to create a clean and scalable pipeline architecture

How to generate AI-based insights from CRM activity

How external platforms (like Breezy) can integrate their data using a pattern HubSpot recommends

It focuses on integration mechanics, not production-ready features.

## 3. AI Usage Documentation
AI Tools Used

Google Gemini 2.0 Pro (primary model)

OpenAI ChatGPT (architecture planning, debugging)

GitHub Copilot (syntax assistance)

What Tasks Were Done With AI

Designing the AI sales insight generator

Creating the ERD diagram

Explaining HubSpot associations and pipeline structure

Improving README clarity

Refining backend prompt engineering

Troubleshooting API mismatch errors

What Was Challenging

Gemini model naming inconsistencies

HubSpot’s association object IDs

Mapping a generic HVAC B2B cycle without assuming Breezy internals

Keeping the POC simple but credible for a real client

How AI Helped

AI accelerated:

Documentation

Prompting

CRM data summaries

Structural architecture

Communication clarity

AI did not replace:

CRM strategy knowledge

Integration architectural reasoning

Sales pipeline design

This proves AI enhances work but cannot replace consultant-level decisions.

## 4. HubSpot Data Architecture
A. Entity Relationship Diagram (ERD)

(Insert your PNG here once uploaded to GitHub — example)

![ERD](./docs/erd.png)

ERD Explanation
Contacts 1 ─────< Deals >───── 1 Companies
      │                       │
      └──────< Activities >───┘

Key Objects
Object	Description
Contacts	Individual decision-makers or lead owners
Companies	Organizations requesting HVAC equipment
Deals	Opportunities for commercial HVAC sales
Activities	Meetings, calls, tasks
B. Deal Pipeline Architecture
Breezy HVAC Sales Pipeline
Stage	Description
New Lead	Inquiry received
Discovery	Initial scoping, budget, need
Technical Assessment	Site inspection, sizing, product fit
Proposal Sent	Quote delivered
Negotiation	Pricing, contracting
Closed Won	Deal completed
Closed Lost	Not converted

This cycle is typical for commercial HVAC and avoids operational workflows (installation, ticketing) since they are out of scope for this POC.

## 5. Optional – AI Feature Explanation
Feature: CRM Insight Generator

Why this feature?
Sales teams waste time reviewing scattered CRM data. AI condenses it into impactful coaching insights.

How it works

Collect all CRM activity

Format it into a structured prompt

Send to Gemini

Gemini produces a 2–3 sentence high-level insight

When AI helps vs rules

Use AI	Use rules
Trend detection	Field validation
Sentiment evaluation	Workflow triggers
Summary generation	Object associations
Sales coaching	Data sync logic
## 6. Design Decisions
Technical Choices

React + Vite for fast POC UI

Node.js + Express for simple API

REST instead of webhooks due to POC scope

Google Gemini for explainability and summarization

HubSpot CRM v3 API for deals, contacts, associations

Assumptions About Breezy

Breezy owns its own customer DB

Breezy only needs to sync sales-related data

Installation/ticketing processes are not part of this POC

Breezy intends to push CRM data into HubSpot (one-way sync)

What I’d Improve With More Time

OAuth2 instead of API key

Two-way sync + change detection

Robust retry logic

Paging and caching

Deeper AI sales coaching (e.g. scoring)

Testing framework

What I Would Ask the Client Before Production

What is the source of truth for contacts?

Should we sync ALL deals or only HVAC opportunities?

Are there custom objects needed?

Expected event volume (affects HubSpot API limits)?

Required sync SLA (real-time vs batch)?

Regional requirements?

What permissions should Breezy control inside HubSpot?

## What Success Looks Like
✔ Breezy expects:

Working POC

Real integration mechanics

Clear CRM architecture

Correct associations

Thoughtful pipeline strategy

Effective use of AI

Strong communication of decisions

❌ They do not expect:

Production-grade code

Pixel-perfect UI

100% error-handling

## Final Note

This POC showcases:

Integration design

CRM architecture

AI augmentation

Modern patterns

Clear consultative reasoning

It is exactly what a HubSpot Solution Architect would deliver in a real client workshop.
