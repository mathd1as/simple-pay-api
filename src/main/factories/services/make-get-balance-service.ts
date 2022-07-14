import { GetBalanceService } from '@/data/services/get-balance-service'

export const makeGetBalanceService = (): GetBalanceService => {
  return new GetBalanceService()
}
