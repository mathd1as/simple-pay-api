import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'

describe('ProcessTransactionService', () => {
  it('Should be call savePayable and saveTransaction 1 time and return transactio id', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      description: 'teste',
      cardNumber: 4854,
      cardHolderName: 'matheus l d silva',
      cardExpiringDate: '01/22',
      securityCode: 123
    }

    const repoMock = {
      savePayable: jest.fn(),
      saveTransaction: jest.fn().mockReturnValueOnce(30)
    }

    const processTransactionService = new ProcessTransactionService(repoMock)
    const result = await processTransactionService.exec(payload)

    expect(result).toEqual({ id: 30 })
    expect(repoMock.savePayable).toHaveBeenCalledTimes(1)
    expect(repoMock.saveTransaction).toHaveBeenCalledTimes(1)
  })

  it('Should be call savePayable and saveTransaction 1 time and return transactio id', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      description: 'teste',
      cardNumber: 4854,
      cardHolderName: 'matheus l d silva',
      cardExpiringDate: '01/22',
      securityCode: 123
    }

    const repoMock = {
      savePayable: jest.fn(),
      saveTransaction: jest.fn().mockReturnValueOnce(30)
    }

    const processTransactionService = new ProcessTransactionService(repoMock)
    const result = await processTransactionService.exec(payload)

    expect(result).toEqual({ id: 30 })
    expect(repoMock.savePayable).toHaveBeenCalledTimes(1)
    expect(repoMock.saveTransaction).toHaveBeenCalledTimes(1)
  })
})
