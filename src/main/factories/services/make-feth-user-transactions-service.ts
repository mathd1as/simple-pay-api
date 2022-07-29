
import { FetchUserTransactionsService } from '@/domain/services/fetch-user-transactions-service'
import { makeFetchUserTransactionsRepo } from '../repositories/make-fetch-user-transactions-repo'

export const makeFetchUserTransactionsService = (): FetchUserTransactionsService => {
  return new FetchUserTransactionsService(
    makeFetchUserTransactionsRepo()
  )
}
