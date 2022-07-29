
export type Transaction = {
  id?: number
  value: number
  paymentMethod: string
  cardNumber: number
  cardHolderName: string
  validity: Date
  securityCode: string
  payableId: number
  userId: number
}
