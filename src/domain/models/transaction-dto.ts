import { PaymentMethod } from './payment-method'

export type TransactionDto = {
  value: number
  description: string
  paymentMethod: PaymentMethod
  cardNumber: number
  cardHolderName: string
  cardExpiringDate: string
  securityCode: number
  userId: number
}
