import { PaymentMethod } from './payment-method'

export type TransactionDto = {
  value: number
  paymentMethod: PaymentMethod
  cardNumber: number
  CardholderName: string
  validity: Date
  securityCode: number
}
