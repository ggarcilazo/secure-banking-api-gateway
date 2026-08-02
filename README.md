# 🏦 Core Bancario - API Gateway & Pasarela de Pagos Segura (Enterprise Scale)

Este repositorio contiene la especificación de arquitectura y el diseño técnico perimetral de una API Gateway financiera de gran escala. El sistema expone servicios transaccionales críticos (Gestión de Saldos y Orquestación de Transferencias) operando bajo flujos asíncronos y arquitecturas orientadas a eventos (Webhooks), blindadas mediante políticas de ciberseguridad corporativas OAuth 2.0.

🌐 **Portal de Desarrolladores Interactivo (Live Demo):** [https://ggarcilazo.github.io/secure-banking-api-gateway/](https://ggarcilazo.github.io/secure-banking-api-gateway/)

---

## 🏗️ Mapa de Arquitectura y Seguridad de la API Gateway

<img width="1536" height="1024" alt="arq2" src="https://github.com/user-attachments/assets/6a235b91-f30d-4c78-bfd8-23a9e5b5f1a1" />

---

## 🛠️ Estructura del Proyecto y Apartados de Ingeniería

El ecosistema se encuentra distribuido estratégicamente bajo estándares financieros internacionales:

*   **📁 `api-core/` (Tus Entregables):** Alberga la especificación técnica formal del contrato del banco escrita bajo el estándar mundial **OpenAPI 3.0 (Swagger)**, definiendo payloads y estructuras JSON robustas.
*   **📁 `security-auth/` (Tus Entregables):** Documenta las políticas criptográficas perimetrales para la intercepción de tokens **JWT (JSON Web Tokens)** mediante esquemas OAuth2 de autenticación segura.
*   **📁 `async-webhooks/` (Tus Entregables):** Contiene el código funcional en **Python** que simula un procesador distribuidor batch encargado de despachar webhooks y notificar cobros a comercios externos en background.
*   **📄 `qa_automation_playwright.js` (Módulo de tu Compañero):** Script automatizado de QA utilizando **Playwright** que ejecuta Smoke Tests de forma concurrente, validando el bloqueo de peticiones no autorizadas (401) y la aceptación en cola (202).

---

## 📸 Evidencia de Disponibilidad del Portal Bancario
La documentación está desplegada en internet de forma serverless. Cualquier evaluador o Developer de integraciones puede auditar y testear el comportamiento del sandbox interactivo de Swagger UI de manera pública.

<img width="2842" height="1449" alt="Captura de pantalla 2026-08-01 232350" src="https://github.com/user-attachments/assets/4c06d9df-c899-49ec-8937-770c3754f684" />

<img width="2845" height="1454" alt="Captura de pantalla 2026-08-01 232406" src="https://github.com/user-attachments/assets/3a621c44-c085-4b3e-83ce-109b11371a5d" />


---
## 👥 Colaboradores
*   **Joaquín Garcilazo** (`ggarcilazo`) - Solution Architect, API Manager & Ciberseguridad Financiera, Ingeniero de QA Automation & Validador de Software.
