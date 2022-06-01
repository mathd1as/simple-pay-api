import { PaymentMethod } from './payment-method'

export type Transaction = {
  value: number
  paymentMethod: PaymentMethod
  cardNumber: number
  CardholderName: string
  validity: Date
  securityCode: number
}
