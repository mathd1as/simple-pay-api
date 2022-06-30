import { PaymentMethod } from '@/domain/models'

export type ProcessTransactionDTO = {
  value: number
  description: string
  paymentMethod: PaymentMethod
  cardNumber: number
  cardHolderName: string
  cardExpiringDate: string
  securityCode: number
}
