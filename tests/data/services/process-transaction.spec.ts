import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'

describe('ProcessTransactionService', () => {
  it('', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      cardNumber: 4854,
      CardholderName: 'matheus l d silva',
      validity: new Date(),
      securityCode: 123
    }
    const processTransactionService = new ProcessTransactionService()
    const result = await processTransactionService.exec(payload)
    console.log(result)
  })
})
