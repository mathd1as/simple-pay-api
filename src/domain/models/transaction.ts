import { PaymentMethod } from './payment-method'

export type Transaction = {
  value: number
  paymentMethod: PaymentMethod
  cardNumber: number
  cardHolderName: string
  validity: Date
  securityCode: number
  payableId: number
  userId: number
}
