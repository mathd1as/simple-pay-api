import { ConsultBalanceController } from '@/application/controllers/consult-balance-controller'
import { makeGetBalanceService } from '../services/make-consult-balance-service'

export const makeConsultBalanceController = (): ConsultBalanceController => {
  return new ConsultBalanceController(
    makeGetBalanceService()
  )
}
