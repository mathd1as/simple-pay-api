import { PayableStatus } from '@/domain/models/payable-status'

export type Payable = {
  status: PayableStatus
  paymentDate: Date
  paymentHour: Date
}
