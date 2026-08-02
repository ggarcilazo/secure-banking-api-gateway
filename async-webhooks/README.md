# 📁 Módulo de Notificaciones y Webhooks Asíncronos

Este subdirectorio almacena la lógica batch encargada de reaccionar ante eventos en background.

## 🚀 Componentes Técnicos

1. **`webhook_simulator.py`**: Script ejecutable desarrollado en **Python**. Simula el comportamiento de una pasarela de mensajería que procesa ráfagas de transacciones aprobadas, inyectando identificadores únicos (UUID), estructurando payloads JSON en tiempo real y despachando webhooks mediante llamadas remotas automatizadas a los comercios.

## 💻 Ejecución del Simulador
Para auditar la ráfaga de mensajería localmente, ejecute en su terminal:
```bash
python async-webhooks/webhook_simulator.py
```
