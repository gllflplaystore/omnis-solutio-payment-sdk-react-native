export type InitConfig = {
  merchantId: string;
  environment: 'sandbox' | 'production';
};

export type PaymentRequest = {
  amount: number;
  currency: string;
  orderId: string;
};

export type CardDetails = {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
};

export type PaymentResult = {
  status: 'SUCCESS' | 'FAILED' | 'ACTION_REQUIRED';
  transactionId?: string;
  redirectUrl?: string;
};
