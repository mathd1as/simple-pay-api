import { ConsultBalance } from '@/domain/use-cases/consult-balance'
import { ConsultBalanceRepo } from '@/domain/contracts/repos/consult-balance-repo'

export class ConsultBalanceService implements ConsultBalance {
  constructor (private readonly getBalanceRepo: ConsultBalanceRepo) {}

  async exec (params: ConsultBalance.Params): Promise<ConsultBalance.Result> {
    const { id } = params
    const transactions = await this.getBalanceRepo.getUserTransactions({ id })
    const balance = {
      available: 0,
      waitingFunds: 0
    }
    for (const item of transactions) {
      if (item.paymentMethod === 'debit_card') {
        balance.available = balance.available + item.value
      } else if (item.paymentMethod === 'credit_card') {
        balance.waitingFunds = balance.waitingFunds + item.value
      }
    }

    return balance
  }
}
