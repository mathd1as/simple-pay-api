import { ConsultBalanceService } from '@/domain/services/consult-balance-service'
import { makeConsultBalanceRepo } from '../repositories/make-consult-balance-repo'

export const makeGetBalanceService = (): ConsultBalanceService => {
  return new ConsultBalanceService(
    makeConsultBalanceRepo()
  )
}
