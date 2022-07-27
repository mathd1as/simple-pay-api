import { FetchUserTransactionsController } from '@/application/controllers/fetch-user-transactions-controller'
import { makeFetchUserTransactionsService } from '../services/make-feth-user-transactions-service'

export const makeFetchUserTransactionsController = (): FetchUserTransactionsController => {
  return new FetchUserTransactionsController(
    makeFetchUserTransactionsService()
  )
}
