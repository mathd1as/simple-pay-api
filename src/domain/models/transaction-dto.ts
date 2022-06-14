import { PaymentMethod } from './payment-method'

export type TransactionDto = {
  value: number
  paymentMethod: PaymentMethod
  cardNumber: number
  cardHolderName: string
  validity: Date
  securityCode: number
}
