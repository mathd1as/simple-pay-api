type Transaction = {
  value: number,
  description: string,
  paymentMethod: PaymentMethod,
  cardNumber: number,
  cardholderName: string
  cardExpirationDate: Date
  cvv: number
}

enum PaymentMethod {
  "debit_card",
  "credit_card"
}
