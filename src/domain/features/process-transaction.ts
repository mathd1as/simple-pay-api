import { PaymentMethod } from '@/domain/models'
import { ProcessTransactionError } from '@/domain/errors'

export interface ProcessTransaction {
  exec: (params: ProcessTransaction.Params) => Promise<ProcessTransaction.Result>
}

namespace ProcessTransaction {
  export type Params = {
    value: number
    paymentMethod: PaymentMethod
    cardNumber: number
    CardholderName: string
    validity: Date
    securityCode: number
  }

  export type Result = string | ProcessTransactionError
}
