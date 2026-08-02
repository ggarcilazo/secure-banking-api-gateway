# 📁 Módulo de Contratos y Especificación Técnica (OpenAPI)

Este subdirectorio contiene la estructura medular del comportamiento y los endpoints transaccionales expuestos por el Core del banco.

## 🚀 Componentes Técnicos

1. **`openapi.json`**: Contrato técnico formal desarrollado bajo la especificación **OpenAPI 3.0**. Estructura esquemas robustos para:
   *   `GET /api/v1/cuentas/saldos`: Consulta masiva que retorna balances y monedas tras superar la política perimetral.
   *   `POST /api/v1/pagos/transferir`: Endpoint asíncrono optimizado que despacha respuestas de tipo `HTTP 202 Accepted` indicando inserción exitosa en colas batch de procesamiento contable.
