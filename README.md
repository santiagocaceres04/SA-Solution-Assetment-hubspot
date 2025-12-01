# 🌬️ HubSpot + Gemini AI Integration POC: Breezy Air Systems

This document serves as a technical assessment and guide for the **Proof of Concept (PoC)** demonstrating a modern, comprehensive integration between an application stack, **HubSpot CRM**, and **Google Gemini AI**. The goal is to showcase how to unify CRM data, AI insights, and app workflows into a single, frictionless experience for **Breezy Air Systems**.

## 🚀 1. Project Overview

This PoC showcases an end-to-end integration connecting:

* **Backend:** Node.js + Express
* **Frontend:** React + Vite
* **CRM:** HubSpot API (Contacts and Deals)
* **Artificial Intelligence:** Gemini 2.5 Flash

### Key Features
* ✔ Real-time **Sync** of Contacts and Deals.
* ✔ Management of **Associations** between CRM objects.
* ✔ Instant **AI Insights Generation** based on sales data.
* ✔ Recommended **Data Architecture** tailored for the HVAC business.
* ✔ Optimized **Sales Pipeline** reflecting Breezy's operations.

---

## 🛠️ 2. Setup and Testing Guide

Follow these steps to get the application up and running.

### 📋 Prerequisites

Ensure you have the following components installed:

* **Node.js** (v18+)
* **NPM** (v9+)
* **HubSpot Private App Token**
* **Google AI Studio Key** (for Gemini)
* Web Browser (Chrome/Edge recommended)

### ⚙️ Backend Setup (Node.js)

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Install the Gemini SDK:
    ```bash
    npm install @google/generative-ai
    ```
4.  Create a `.env` configuration file and insert your keys:
    ```
    GEMINI_API_KEY=your_google_api_key_here
    HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here
    ```
5.  Start the server:
    ```bash
    node server.js
    ```
    👉 **Backend URL:** `http://localhost:3001`

### 💻 Frontend Setup (React + Vite)

1.  Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the application:
    ```bash
    npm run dev
    ```
    👉 **Frontend URL:** `http://localhost:5173`

---

## 🧪 3. Integration Flow (Testing Steps)

Once both the backend and frontend are running:

1.  Create a **Contact** in the frontend application → Verify it appears in HubSpot.
2.  Create a **Deal** and associate it with the contact.
3.  Navigate to the **AI Insights** page in the application.
4.  Click **"Generate Insight"**.
5.  Gemini will analyze the Contacts and Deals data in real-time and return valuable insights.

> *The core design principles are simplicity, speed, and completeness.*

---

## 🤖 4. AI Usage Documentation

The **Gemini 2.5 Flash** model was selected for its balance of speed and strong reasoning capabilities in data analysis.

### Tasks AI Was Used For
| Task | Description |
| :--- | :--- |
| **Insight Generation** | Analysis of Contacts and Deals data. |
| **Summaries** | Creation of customer activity summaries for sales reps. |
| **Risk Analysis** | Explanations of deal risk and potential roadblocks. |
| **Pattern Detection**| Identification of trends within the sales pipeline. |

### Learnings and Challenges
| Pros (Benefits) | Cons (Challenges) |
| :--- | :--- |
| **Extremely fast analysis** (seconds vs. hours). | **Requires human review**; AI is not 100% accurate. |
| **Time savings** for sales teams via concise summaries. | **Incorrect prompts** generate irrelevant insights. |
| **Pattern detection** that humans can easily miss. | **Clean CRM data** is critical before sending it to the AI. |

---

## 🏗️ 5. HubSpot Data Architecture

### Entity Relationship Diagram (ERD)

This model is intentionally simplified to match Breezy's PoC scope.



* **Contacts** — Represent customers (prospects and existing).
* **Deals** — Represent sales opportunities.
* **Associations** — **1 Contact → N Deals** relationship.

### 📊 Suggested HVAC Sales Pipeline

The proposed pipeline reflects real-world processes in an HVAC business.



1.  **Lead Captured**
2.  **Qualification**
3.  **Needs Assessment**
4.  **Quote Sent**
5.  **Negotiation**
6.  **Scheduled Installation**
7.  **Won**
8.  **Lost**

---

## 🌟 6. AI-Powered Feature: Commercial Insights

The AI in this integration serves a crucial role in providing actionable intelligence:

**Why This Feature?** Sales decision-making is improved when insights arrive instantly, not days later.

**How It Makes the Integration Smarter:**
* Accelerates decision-making.
* Enhances mapping and workflow intelligence.
* Learns from sales activity over time.
* Automatically identifies untapped opportunities.

### AI vs. Traditional Logic

| Use Case | AI (Gemini) | Traditional Logic/Rules |
| :--- | :--- | :--- |
| **Insight Generation** | ✔ | ❌ |
| **Pattern Detection** | ✔ | ❌ |
| Sync and Transformations | ❌ | ✔ |
| Data Validation | ❌ | ✔ |

> **Conclusion:** AI **complements** and augments business logic; it does not replace it.

---

## ⚙️ 7. Design Decisions and Future Improvements

### Technical Choices

| Component | Choice | Rationale |
| :--- | :--- | :--- |
| **API** | Node.js + Express | Fast API integration and performance. |
| **Frontend** | React + Vite | Lightweight, modern, and robust framework. |
| **AI** | Gemini 2.5 Flash | Excellent for reasoning and data summarization. |
| **CRM API** | HubSpot API v3 | Reliable, well-structured API. |

### Assumptions About Breezy’s Platform

* They sell HVAC products and services.
* **HubSpot** is their primary CRM/System of Record.
* They require **automation** for insight generation.
* They seek **frictionless integration** between their app and the CRM.

### Improvements with More Time

* Train and refine prompts for deeper, custom insights.
* Build comprehensive **analytics dashboards** based on pipeline performance.
* Add more CRM objects (Installations, Tickets, Products).
* Expand workflows and automations based on AI triggers.

### Key Questions for the Client (Pre-Production)

* How many **leads** are processed per month on average?
* What are the **peak seasons** for sales and service?
* What is the required **SLA** (Service Level Agreement) for the integration?
* Which **internal teams** (Sales, Marketing, Management) will utilize the AI insights?


