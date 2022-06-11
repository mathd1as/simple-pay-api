import { ProcessTransactionRepo } from '@/data/contracts/repos'

export class ProcessTransactionRepoository implements ProcessTransactionRepo {
  async savePayable (params: ProcessTransactionRepo.PayableParams): Promise<ProcessTransactionRepo.PayableResult> {
    return 10
  }

  async saveTransaction (params: ProcessTransactionRepo.TrasactionParams): Promise<ProcessTransactionRepo.TransactionResult> {
    return 'teste'
  }
}
