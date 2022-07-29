import { PayableStatus } from '@/domain/entities/models/payable-status'

export type Payable = {
  value: number
  status: PayableStatus
  paymentDateHour: Date
}
