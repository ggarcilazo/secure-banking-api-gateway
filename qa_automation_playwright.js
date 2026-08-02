// Script de Automatización de Pruebas de API - Playwright
const { test, expect } = require('@playwright/test');

test.describe('Suite de Pruebas de Humo (Smoke Tests) - Core Bancario API', () => {

    test('Validar rechazo de consulta de saldos sin token de seguridad (HTTP 401)', async ({ request }) => {
        const response = await request.get('https://secure-banking-api-gateway.mock');
        
        // El Gateway debe bloquear la petición por falta de cabeceras OAuth2
        console.log(`Estatus recibido sin token: ${response.status()}`);
        expect(response.status()).toBe(401);
    });

    test('Validar aceptación de transferencia inmediata en cola asíncrona (HTTP 202)', async ({ request }) => {
        const response = await request.post('https://secure-banking-api-gateway.mock', {
            data: {
                origenCuenta: "ACC-77492-PERU",
                destinoCuenta: "ACC-88301-LIMA",
                monto: 1500.00
            }
        });
        
        // Verifica que el banco reciba la transacción para su posterior procesamiento batch
        console.log(`Estatus recibido para pago masivo: ${response.status()}`);
        expect(response.status()).toBe(202);
        
        const body = await response.json();
        expect(body.estado).toContain("Procesando");
    });
});
