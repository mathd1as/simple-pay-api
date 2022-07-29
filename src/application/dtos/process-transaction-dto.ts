import { PaymentMethod } from '@/domain/entities/models'

export type ProcessTransactionDTO = {
  value: number
  description: string
  paymentMethod: PaymentMethod
  cardNumber: number
  cardHolderName: string
  cardExpiringDate: string
  securityCode: string
}
