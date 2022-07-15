import { GetBalanceService } from '@/data/services/get-balance-service'
import { makeGetBalanceRepo } from '../repositories/make-get-balance-repo'

export const makeGetBalanceService = (): GetBalanceService => {
  return new GetBalanceService(
    makeGetBalanceRepo()
  )
}
