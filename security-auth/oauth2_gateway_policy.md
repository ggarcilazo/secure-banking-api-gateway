# 🔐 POLÍTICA DE SEGURIDAD PERIMETRAL: API GATEWAY BANCARIO

## 1. Esquema de Autenticación (OAuth 2.0 - Client Credentials)
Toda petición externa orientada a la consulta de saldos o transferencias masivas debe incluir de forma obligatoria la cabecera HTTP `Authorization: Bearer <JWT_TOKEN>`.

## 2. Estructura del Token JWT (Simulada para Verificación)
El Gateway intercepta el token y valida que contenga las siguientes firmas criptográficas de seguridad:
*   **Algoritmo:** RS256 (Clave Pública/Privada).
*   **iss (Emisor):** `https://bancoseguro.com.pe`
*   **scope (Permisos):** `cuentas.read` | `pagos.write`
*   **exp (Expiración):** 900 segundos (15 minutos de vida útil).
