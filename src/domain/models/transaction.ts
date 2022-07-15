
export type Transaction = {
  value: number
  paymentMethod: string
  cardNumber: number
  cardHolderName: string
  validity: Date
  securityCode: string
  payableId: number
  userId: number
}
