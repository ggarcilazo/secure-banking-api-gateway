import time
import uuid

print("=== INICIANDO CORE DE NOTIFICACIONES ASÍNCRONAS (WEBHOOKS) ===")
print("Escuchando eventos en la cola de mensajería del banco...")

# Simulación de una ráfaga masiva de transferencias aprobadas
eventos_transferencias = [
    {"comercio_url": "https://tienda-retail.pe", "monto": 1500.00},
    {"comercio_url": "https://pasarela-pagos.com", "monto": 450.20},
    {"comercio_url": "https://seguros-vida.pe", "monto": 2900.00}
]

for evento in eventos_transferencias:
    tx_id = str(uuid.uuid4())
    print(f"\n[EVENTO DETECTADO] Transacción {tx_id} aprobada contablemente.")
    print(f"-> Despachando Webhook asíncrono a: {evento['comercio_url']}")
    print(f"-> Payload enviado: {{'event': 'PAYMENT_SUCCESS', 'amount': {evento['monto']}, 'tx': '{tx_id}'}}")
    time.sleep(1) # Simula retraso de procesamiento de red distribuida

print("\n[OK] Todos los webhooks de la cola batch fueron despachados con código HTTP 200.")
