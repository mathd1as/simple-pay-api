import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'
import { ProcessTransactionError } from '@/domain/errors'

describe('ProcessTransactionService', () => {
  it('Should be call savePayable and saveTransaction 1 time and return transactio id', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      description: 'teste',
      cardNumber: 4854,
      cardHolderName: 'Fulano Teste de Tal',
      cardExpiringDate: '01/22',
      securityCode: 123,
      userId: 1
    }

    const transactionIdMock = 30

    const repoMock = {
      savePayable: jest.fn(),
      saveTransaction: jest.fn().mockReturnValueOnce(transactionIdMock)
    }

    const processTransactionService = new ProcessTransactionService(repoMock)
    const result = await processTransactionService.exec(payload)

    expect(result).toEqual({ id: transactionIdMock })
    expect(repoMock.savePayable).toHaveBeenCalledTimes(1)
    expect(repoMock.saveTransaction).toHaveBeenCalledTimes(1)
  })

  it('should throw in saveTransaction and return ProcessTransactionError error', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      description: 'teste',
      cardNumber: 4854,
      cardHolderName: 'Fulano Teste de Tal',
      cardExpiringDate: '01/22',
      securityCode: 123,
      userId: 1
    }

    const repoMock = {
      savePayable: jest.fn(),
      saveTransaction: jest.fn().mockRejectedValue(new Error('repository_error_mock'))
    }

    const processTransactionService = new ProcessTransactionService(repoMock)

    await expect(processTransactionService.exec(payload)).rejects.toThrow(new ProcessTransactionError())
  })

  it('should throw in savePayable and return ProcessTransactionError error', async () => {
    const payload = {
      value: 100,
      paymentMethod: PaymentMethod.credit_card,
      description: 'teste',
      cardNumber: 4854,
      cardHolderName: 'Fulano Teste de Tal',
      cardExpiringDate: '01/22',
      securityCode: 123,
      userId: 1
    }

    const repoMock = {
      savePayable: jest.fn().mockRejectedValue(new Error('repository_error_mock')),
      saveTransaction: jest.fn()
    }

    const processTransactionService = new ProcessTransactionService(repoMock)

    await expect(processTransactionService.exec(payload)).rejects.toThrow(new ProcessTransactionError())
  })
})
