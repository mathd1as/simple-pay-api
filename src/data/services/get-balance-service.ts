import { GetBalance } from '@/domain/features/get-balance'
import { GetBalanceRepo } from '@/data/contracts/repos/get-balance-repo'

export class GetBalanceService implements GetBalance {
  constructor (private readonly getBalanceRepo: GetBalanceRepo) {}

  async exec (params: { id: string }): Promise<GetBalance.Result> {
    const { id } = params
    const transactions = await this.getBalanceRepo.getUserTransactions({ id })
    const balance = {
      available: 0,
      waitingFunds: 0
    }
    for (const item of transactions) {
      console.log(item)
      if (item.paymentMethod === 'debit_card') {
        balance.available = balance.available + item.value
      } else if (item.paymentMethod === 'credit_card') {
        balance.waitingFunds = balance.waitingFunds + item.value
      }
    }

    return balance
  }
}
