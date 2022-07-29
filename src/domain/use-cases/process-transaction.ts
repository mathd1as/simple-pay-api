import { ProcessTransactionError } from '@/domain/entities/errors'

export interface ProcessTransaction {
  exec: (params: ProcessTransaction.Params) => Promise<ProcessTransaction.Result>
}

export namespace ProcessTransaction {
  export type Params = {
    value: number
    description: string
    paymentMethod: string
    cardNumber: number
    cardHolderName: string
    cardExpiringDate: string
    securityCode: string
    userId: number
  }

  export type Result = { id: number } | ProcessTransactionError
}
