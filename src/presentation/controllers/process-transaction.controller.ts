import { Controller } from '../contracts/controller'
import { HttpResponse } from '../contracts/http'
import { ProcessTransaction } from '../../domain/usecase'

export class ProcessTransactionController implements Controller {
  constructor(private readonly processTransaction: ProcessTransaction) { }

  async handle (): Promise<HttpResponse> {
    const test = this.processTransaction.exec()
    return {
      statusCode: 500,
      body: test
    }
  }
}