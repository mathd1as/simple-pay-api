import { TransactionRepository } from '../../data/contracts'

export class DatabaseRepository implements TransactionRepository {
  saveTransaction (): void {
    console.log('operação salva no banco de dados!!')
  }
}
