import { ProcessTransaction } from '../../domain/usecase/process-transaction'
import { TransactionRepository } from '../contracts/transaction-repository'

export class ProcessTransactionService implements ProcessTransaction {
  constructor(private readonly transactionRepository: TransactionRepository) {
    console.log('teste')
  }

  async exec (): Promise<void> {
    this.transactionRepository.saveTransaction()
  }
}
