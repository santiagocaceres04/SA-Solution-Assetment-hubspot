# 🌬️ HubSpot + Gemini AI Integration POC: Breezy Air Systems

This document serves as the final documentation and technical assessment for the **Proof of Concept (PoC)** demonstrating a seamless integration between an application stack, **HubSpot CRM**, and **Google Gemini AI** for Breezy Air Systems.

## 🚀 1. Project Overview

This PoC showcases an end-to-end integration connecting:

* [cite_start]**Backend:** Node.js + Express [cite: 107]
* [cite_start]**Frontend:** React + Vite [cite: 143]
* [cite_start]**CRM:** HubSpot API (Contacts and Deals) [cite: 5, 34]
* [cite_start]**Artificial Intelligence:** Gemini 2.5 Flash [cite: 88, 90]

### B. Project Overview
The PoC demonstrates the **data integration** between the transactional application and the **HubSpot CRM**, ensuring they operate as a single, unified experience rather than disconnected systems. Additionally, it proves the value of using an AI model, such as **Gemini 2.5 Flash**, to generate **real-time insights** from synchronized sales data and the active sales pipeline.

---

## 🛠️ 2. Setup and Testing Guide

### A. Setup Instructions

#### 📋 Prerequisites
Ensure you have the following components installed:

* [cite_start]**Node.js** (v18+) [cite: 109]
* [cite_start]**NPM** (v9+) [cite: 109]
* [cite_start]**HubSpot Private App Token** [cite: 127]
* [cite_start]**Google AI Studio Key** (for Gemini) [cite: 135]
* Web Browser (Chrome/Edge recommended)

#### ⚙️ Backend Setup (Node.js)

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
4.  [cite_start]Create a `.env` configuration file and insert your keys (Expected environment variables)[cite: 131, 132]:
    ```
    GEMINI_API_KEY=your_google_api_key_here
    HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here
    ```
5.  Start the server:
    ```bash
    node server.js
    ```
    [cite_start]👉 **Backend URL:** `http://localhost:3001` [cite: 140]

#### 💻 Frontend Setup (React + Vite)

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
    [cite_start]👉 **Frontend URL:** `http://localhost:5173` (Common Vite default) [cite: 146]

### [cite_start]How to Test the Integration Flow [cite: 162]

1.  [cite_start]**Create a Contact:** Use the Contact Sync form to simulate a thermostat purchase/account creation[cite: 48]. [cite_start]Verify the new Contact appears in the displayed list[cite: 62].
2.  [cite_start]**Create a Deal:** Use the Deal Creation form to simulate a paid subscription conversion[cite: 67]. [cite_start]Associate the Deal with the Contact you just created[cite: 69].
3.  **Generate AI Insight:** Navigate to the AI Insights page and click the "Generate Insight" button.
4.  [cite_start]**Validate Insight:** Gemini will analyze the HubSpot data (Contacts and Deals) and return the generated commercial insight[cite: 88, 92].

---

## 🤖 3. AI Usage Documentation

### C. AI Usage Documentation

| Detail | Description |
| :--- | :--- |
| **Which AI tools did you use?** | [cite_start]**Gemini 2.5 Flash** [cite: 88, 90] using the **@google/generative-ai SDK**. |
| **What tasks did you use AI for?** | [cite_start]**Insight Generation** based on Contacts + Deals from HubSpot[cite: 92], **Commercial Summaries**, and **Automated Opportunity Explanations**. |
| **What did you learn? What was challenging?** | [cite_start]The challenge was **choosing the correct model version** within the SDK, as some perform better than others for reasoning tasks[cite: 168]. [cite_start]The key learning was that with **correct prompt engineering**, high-quality business insights can be quickly extracted from sales data[cite: 168]. |
| **How did AI help (or not help)?** | [cite_start]**AI greatly helps** by accelerating data analysis (seconds vs. hours)[cite: 169]. [cite_start]We must be **careful** because AI is **not 100% accurate**; further human verification is required to ensure data correctness[cite: 169]. |

---

## 🌟 4. AI Feature Explanation

### E. AI Feature Explanation: Commercial Insights

| Detail | Description |
| :--- | :--- |
| **Describe your AI-powered feature** | [cite_start]**Commercial Information Analysis in Seconds**[cite: 175]. This feature provides a **brief business summary** of customer activity and the status of associated deals, enabling a quick understanding of the business health. |
| **Why did you choose this feature?** | [cite_start]Providing immediate data analysis is critical because instant insights allow teams to make **quick, informed decisions**[cite: 176, 177]. |
| **How does it make the integration smarter?** | [cite_start]It enables **rapid decision-making**, facilitates efficient **field mapping**, and introduces **automatic learning** based on transactional activity[cite: 177]. |
| **When would you use AI vs traditional rules/logic?** | **Traditional rules and logic** are used for core business processes like **data validation** and **synchronization**. [cite_start]**AI** is best proposed for **analyzing the information** *after* the successful integration, focusing on pattern detection and insight generation[cite: 178]. |

---

## 🏗️ 5. HubSpot Data Architecture

### [cite_start]D. HubSpot Data Architecture [cite: 96]

#### [cite_start]Entity Relationship Diagram (ERD) [cite: 97, 98]

The core model is simplified to align with the mandatory requirements of the POC: **Contacts** and **Deals**. [cite_start]The recommended model incorporates a **Custom Object** for enhanced tracking of physical assets[cite: 99].



| Object | Purpose | Association | Recommended Properties | Justification |
| :--- | :--- | :--- | :--- | :--- |
| **Contact** | Represents the B2C **customer/account owner**. | [cite_start]1 Contact $\to$ N Deals (Subscriptions) [cite: 99] | [cite_start]`email`, `firstname`, `lastname`, `phone`, `lifecycle_stage` [cite: 102] | **Primary Record.** Used for all sales, marketing, and service interactions. `email` is the unique sync identifier. |
| **Deal (Subscription)** | Represents the recurring revenue opportunity: the **Breezy Premium Subscription** conversion. | 1 Contact $\to$ N Deals | [cite_start]`dealname`, `amount`, `dealstage`, `pipeline`, `close_date` [cite: 102] | **Revenue Tracking.** Tracks the conversion from trial to paid subscription. Used for measuring conversion rates and forecasting. |
| **Custom Object: Hardware Purchase** (Recommended) | Represents the purchase of a physical **Thermostat** unit. | 1 Contact $\to$ N Purchases | `purchase_date`, `device_serial_number`, `thermostat_model` | **Asset Tracking.** Allows tracking **expansion opportunities** (multiple unit ownership). *This requires HubSpot Enterprise.* |

#### [cite_start]Deal Pipeline Architecture [cite: 173]

This pipeline is designed specifically to track the revenue associated with the **Breezy Premium Subscription** conversion, which begins automatically after a hardware purchase (the 30-day free trial).

| Stage Name | Description | Probability |
| :--- | :--- | :--- |
| **1. Free Trial Active** | The thermostat has been purchased, and the 30-day trial is running. | 25% |
| **2. Trial Nearing End** | 5-7 days remaining until the trial expires. Critical time for conversion attempts. | 50% |
| **3. Negotiation** | Customer has engaged with sales/support regarding pricing or features before expiration. | 75% |
| **4. Closed Won** | Customer has successfully converted to a paid subscription. | 100% |
| **5. Closed Lost** | Customer's trial expired without converting to a paid subscription. | 0% |



---

## ⚙ F. Design Decisions

### [cite_start]Technical Choices [cite: 180]
* **Node.js + Express:** Chosen for a fast, scalable backend for API integration.
* **React + Vite:** Chosen for a lightweight, modern frontend that allows rapid prototyping.
* **Gemini 2.5 Flash:** Chosen for its excellent reasoning and summarization capabilities for quick data analysis.
* **HubSpot API v3:** Chosen for its reliable, modern, and well-structured API.

### [cite_start]Assumptions About Breezy's Platform [cite: 181]
* [cite_start]**HubSpot** is their CRM of choice for Sales and Marketing[cite: 27, 181].
* [cite_start]The primary integration goal is to sync B2C hardware purchases and subscription conversions[cite: 34, 181].
* They seek a **frictionless integration** between their app and the CRM.

### [cite_start]What You'd Improve with More Time [cite: 182]
* Improve **model training** and **prompt refinement** for deeper, more nuanced insights.
* Add a **visual analytics dashboard** to visualize the information insights generated by the AI.
* Expand the data model to include more objects like **Support Tickets** and **Installations**, or refine existing objects like **Products**.

### [cite_start]What You'd Ask the Client Before Building Production Version [cite: 183]
* What is the **expected volume of leads/transactions per month**? (To determine infrastructure and API rate limit capacity).
* What is the **required turnaround time** for the AI analysis? (How fast should insights load?).
* Which **times of the year** do they experience peak sales? (To plan for scaling capacity during peak periods).
* What are the **required SLAs** (Service Level Agreements) for data synchronization?
