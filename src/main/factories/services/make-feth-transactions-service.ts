
import { FetchTransactionsService } from '@/domain/services/fetch-transactions-service'
import { makeFetchTransactionsRepo } from '../repositories/make-fetch-transactions-repo'

export const makeFetchTransactionsService = (): FetchTransactionsService => {
  return new FetchTransactionsService(
    makeFetchTransactionsRepo()
  )
}
