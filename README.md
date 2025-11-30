# 🌀 HubSpot Integration POC – Breezy Air Systems  
**Solution Architect Technical Assessment**

Este repositorio contiene un Proof-of-Concept (POC) que demuestra cómo integrar una plataforma externa con HubSpot utilizando Node.js, React (Vite), la API de HubSpot CRM y Gemini AI para análisis inteligente de contactos y deals.

---

# 🔧 A. Setup Instructions

## 1. Prerequisitos
- Node.js v18+
- Cuenta de HubSpot con permisos CRM
- Private App Token de HubSpot
- API Key de Google Gemini
- Git

---

# 🧰 B. Backend Setup (Node.js)

### 1. Ingresar a la carpeta backend
```bash
cd backend

2. Instalar dependencias

npm install

3. Instalar el SDK de Gemini

npm install @google/generative-ai

4. Crear archivo .env

GEMINI_API_KEY=tu_api_key_aqui
HUBSPOT_ACCESS_TOKEN=tu_token_de_private_app

5. Ejecutar backend

node server.js

El backend correrá en:
👉 http://localhost:3001
💻 C. Frontend Setup (React + Vite)
1. Ingresar al frontend

cd frontend

2. Instalar dependencias

npm install

3. Ejecutar el proyecto

npm run dev

Frontend disponible en:
👉 http://localhost:5173
🔐 D. Expected Environment Variables

# Backend
GEMINI_API_KEY=xxxx
HUBSPOT_ACCESS_TOKEN=xxxx

🧪 E. How to Test the Integration Flow

1. Ejecutar backend y frontend.
2. Navegar al menú "AI Insights" del frontend.
3. Click en “Generate Insight”.
4. El frontend llama al backend → backend consulta Contacts y Deals en HubSpot.
5. Backend envía la información a Gemini → genera un insight CRM.
6. Resultado mostrado en pantalla.

🌐 F. Project Overview

Este POC demuestra:

    Cómo conectar un sistema externo con HubSpot CRM.

    Cómo leer y escribir contactos y deals.

    Cómo relacionar objetos vía asociaciones HubSpot.

    Cómo enriquecer datos utilizando IA (Gemini).

    Cómo estructurar un modelo de datos HubSpot adecuado para un negocio que vende aires acondicionados e instalaciones.

El objetivo NO es construir un sistema completo, sino demostrar patrones de integración y buenas prácticas técnicas.
🤖 G. AI Usage Documentation
✔ ¿Qué herramientas de IA se utilizaron?

    Google Gemini 1.5 Flash

    SDK @google/generative-ai

✔ ¿Para qué se usó IA en este POC?

    Generación de insights basados en Contactos + Deals desde HubSpot.

    Resúmenes comerciales.

    Explicación automática de oportunidades.

✔ ¿Qué aprendí?

    Cómo integrar Gemini con Node.js de forma limpia.

    La importancia del pre-procesamiento antes de enviar datos a un modelo LLM.

    A manejar límites de tamaño y optimización de prompts.

✔ ¿Qué fue retador?

    Evitar enviar demasiados datos a Gemini (optimizar payload).

    Estructurar un prompt que genere insights útiles y concretos.

✔ ¿Cómo ayudó la IA?

    Permitió generar insights de CRM automáticamente.

    Aceleró el análisis comercial sin reglas complejas.

    Redujo tiempo de desarrollo para construir lógica manual.

🏗️ H. HubSpot Data Architecture

(Respuesta completa a Part 2 del Assessment)
1. Entity Relationship Diagram (ERD)

✔ Objetos principales
Objeto	Descripción
Contacts	Clientes o leads interesados en productos.
Deals	Oportunidades de venta asociadas a un contacto.
Products (opcional)	Catálogo de aires, repuestos o servicios.
✔ Propiedades recomendadas

Contacts

    firstname

    lastname

    email

    phone

    address

    lead_source

    status

Deals

    dealname

    amount

    dealstage

    closedate

    pipeline

    product_type (aire / instalación / mantenimiento)

    lead_temperature (AI-enriched)

Products (opcional)

    name

    category

    sku

    standard_price

✔ Associations

    Contact → Deal (1:M)

    Deal → Product (M:M)

✔ ¿Por qué este diseño?

    Se ajusta al modelo estándar de HubSpot CRM.

    Escalable para futuros módulos como instalaciones o tickets.

    Permite reportes claros de ciclo de vida, ingresos y conversiones.

    Alineado con el negocio (venta e instalación de aires).

🔄 I. Deal Pipeline Architecture

Propuesta para Breezy Air Systems:
Pipeline: Sales Pipeline
Stage	Descripción
1. New Lead	Primer contacto o formulario.
2. Qualified	Interés validado (tamaño del aire, espacio, presupuesto).
3. Quote Sent	Cotización enviada.
4. Negotiation	Ajustes finales / visitas técnicas.
5. Closed Won	Venta exitosa.
6. Closed Lost	Venta perdida.
✨ J. Optional – AI Feature Explanation
✔ ¿Qué hace la funcionalidad de IA?

Genera un insight en lenguaje natural basado en los datos del CRM:

    Actividad reciente

    Contactos más promisorios

    Deals en riesgo

    Recomendaciones comerciales

✔ ¿Por qué esta funcionalidad?

    Aporta valor inmediato al negocio sin complejidad.

    Muestra el poder de combinar CRM + IA.

✔ ¿Cuándo usar IA vs reglas tradicionales?
Uso	IA	Reglas
Resumen CRM	✔	
Alerta exacta “email missing”		✔
Predicción tendencia de cierre	✔	
Validaciones simples		✔
🧠 K. Design Decisions
✔ Decisiones técnicas

    Node.js + Express para backend por simplicidad.

    React + Vite para frontend rápido.

    Asociación Contact ↔ Deal basada en HubSpot API.

    Gemini para insights automáticos.

✔ Supuestos sobre Breezy

    Manejan ventas de productos (aires) y servicios.

    Requieren insights comerciales automáticos.

    Necesitan claridad en el pipeline de ventas.

✔ ¿Qué mejoraría con más tiempo?

    Webhooks para sincronización en tiempo real.

    Pagos o facturación conectada.

    Un módulo de órdenes de trabajo.

✔ Preguntas al cliente antes de producción

    ¿Cuál es el volumen esperado de datos?

    ¿Necesitan sincronización bidireccional?

    ¿Quieren soporte para múltiples pipelines?

    ¿Qué métricas son más importantes para el negocio?

✔ What Success Looks Like

Este POC demuestra:

    Integración funcional con HubSpot

    Estructura de datos clara y escalable

    Uso real de IA para valor comercial

    Documentación clara y consultiva

    Pensamiento de Solution Architect
