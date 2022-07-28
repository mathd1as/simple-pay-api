import { Controller } from '@/application/controllers/controller'
import { FetchUserTransactionsController } from '@/application/controllers/fetch-user-transactions-controller'
import { FetchUserTransactionsService } from '@/data/services/fetch-user-transactions-service'
import { mock, MockProxy } from 'jest-mock-extended'

describe('FethUserTransactionsController', () => {
  let sut: FetchUserTransactionsController
  let fetchUserTransactionsService: MockProxy<FetchUserTransactionsService>
  const paramsMock = [
    {
      id: 5,
      value: 50,
      paymentMethod: 'debit_card',
      cardNumber: 1044,
      cardHolderName: 'Milton Mauro Card',
      securityCode: '1234',
      validity: new Date('2022-07-27T16:59:35.342Z'),
      payableId: 5,
      userId: 2
    },
    {
      id: 6,
      value: 100,
      paymentMethod: 'debit_card',
      cardNumber: 1044,
      cardHolderName: 'Milton Mauro Card',
      securityCode: '1234',
      validity: new Date('2022-07-27T18:03:37.255Z'),
      payableId: 6,
      userId: 2
    }
  ]

  beforeEach(() => {
    fetchUserTransactionsService = mock()
    fetchUserTransactionsService.exec.mockResolvedValue(paramsMock)
    sut = new FetchUserTransactionsController(fetchUserTransactionsService)
  })
  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })
})
