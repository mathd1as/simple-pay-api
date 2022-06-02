import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'

describe('ProcessTransactionService', () => {
  it('Should be call savePayable and saveTransaction 1 time', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      cardNumber: 4854,
      CardholderName: 'matheus l d silva',
      validity: new Date(),
      securityCode: 123
    }

    const repoMock = {
      savePayable: jest.fn(),
      saveTransaction: jest.fn()
    }

    const processTransactionService = new ProcessTransactionService(repoMock)
    await processTransactionService.exec(payload)

    expect(repoMock.savePayable).toHaveBeenCalledTimes(1)
    expect(repoMock.saveTransaction).toHaveBeenCalledTimes(1)
  })
})
