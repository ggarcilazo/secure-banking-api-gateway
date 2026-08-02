# 📁 Módulo de Ciberseguridad Perimetral y Autenticación OAuth2

Este apartado documenta las reglas de seguridad necesarias para mitigar ataques y accesos no autorizados al Gateway.

## 🚀 Componentes Técnicos

1. **`oauth2_gateway_policy.md`**: Documento normativo de TI que detalla las políticas de validación perimetral. Establece el uso mandatorio de algoritmos asimétricos **RS256** para las firmas de los tokens de acceso, el alcance (*scopes*) de lectura/escritura bancaria y esquemas de expiración forzada de 15 minutos para prevenir secuestros de sesión.

