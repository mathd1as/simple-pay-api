import { GetBalance } from '@/domain/features/get-balance'

export class GetBalanceService implements GetBalance {
  async exec (params: string): Promise<string> {
    return 'teste'
  }
}
