import { NativeModules, Platform } from 'react-native';
import { InitConfig, PaymentRequest, CardDetails, PaymentResult } from '../types';
import { initSdk, createPaymentIntent, payByCard } from '../api/paymentApi';

const { NativePayment } = NativeModules;

let sdkConfig: InitConfig | null = null;

export async function initialize(config: InitConfig) {
  sdkConfig = config;

  if (NativePayment?.initialize) {
    NativePayment.initialize(config);
  }

  return initSdk(config);
}

export async function payWithCard(payment: PaymentRequest, card: CardDetails): Promise<PaymentResult> {
  if (!sdkConfig) throw new Error('SDK not initialized');

  const intent = await createPaymentIntent({
    merchantId: sdkConfig.merchantId,
    ...payment,
  });

  // Call native module (TurboModule)
  if (NativePayment?.startPayment) {
    return NativePayment.startPayment({
      paymentIntentId: intent.paymentIntentId,
      card,
    });
  }

  // fallback to demo API
  return payByCard({
    paymentIntentId: intent.paymentIntentId,
    card,
  });
}
