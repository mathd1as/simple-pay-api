import { ProcessTransactionService } from '@/data/services'

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}
  async handle (httpRequest: any): Promise<any> {
    const result = await this.ProcessTransactionService.exec(httpRequest)

    return {
      statusCode: 200,
      data: result
    }
  }
}
