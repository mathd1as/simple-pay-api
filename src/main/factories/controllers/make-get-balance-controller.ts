import { GetBalanceController } from '@/application/controllers/get-balance-controller'
import { makeGetBalanceService } from '../services/make-get-balance-service'

export const makeGetBalanceController = (): GetBalanceController => {
  return new GetBalanceController(
    makeGetBalanceService()
  )
}
