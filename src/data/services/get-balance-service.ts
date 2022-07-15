import { GetBalance } from '@/domain/features/get-balance'

export class GetBalanceService implements GetBalance {
  constructor (private readonly getBalanceRepo: any) {}

  async exec (params: { id: string }): Promise<GetBalance.Result> {
    const { id } = params
    const teste = this.getBalanceRepo.getUserTransactions(id)
    return teste
  }
}
