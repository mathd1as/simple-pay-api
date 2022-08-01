import { FetchTransactionsController } from '@/application/controllers/fetch-transactions-controller'
import { makeFetchTransactionsService } from '../services/make-feth-transactions-service'

export const makeFetchTransactionsController = (): FetchTransactionsController => {
  return new FetchTransactionsController(
    makeFetchTransactionsService()
  )
}
