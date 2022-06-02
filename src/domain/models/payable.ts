import { PayableStatus } from '@/domain/models/payable-status'

export type Payable = {
  value: number
  status: PayableStatus
  paymentDateHour: Date
}
