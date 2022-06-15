import { ProcessTransactionService } from '@/data/services'

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}
  async handle (httpRequest: any): Promise<any> {
    console.log({ httpRequest })
    const result = await this.ProcessTransactionService.exec(httpRequest)

    return {
      statusCode: 200,
      data: result
    }
  }
}
