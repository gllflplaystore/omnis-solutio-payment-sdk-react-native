const BASE_URL = 'http://10.0.2.2:4000'; // Android emulator, iOS use localhost

export async function initSdk(config: any) {
  return fetch(`${BASE_URL}/sdk/init`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config),
  }).then(r => r.json());
}

export async function createPaymentIntent(payload: any) {
  return fetch(`${BASE_URL}/payment-intent/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(r => r.json());
}

export async function payByCard(payload: any) {
  return fetch(`${BASE_URL}/payment/card/pay`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(r => r.json());
}
