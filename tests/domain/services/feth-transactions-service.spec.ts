import { FetchTransactionsRepo } from '@/domain/contracts/repos/FetchTransactionsRepo'
import { FetchTransactionsService } from '@/domain/services/fetch-transactions-service'
import { mock, MockProxy } from 'jest-mock-extended'

describe('FethUserTransactionsService', () => {
  let fethUserTransactionsRepo: MockProxy<FetchTransactionsRepo>
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
    fethUserTransactionsRepo = mock()
    fethUserTransactionsRepo.perform.mockResolvedValue(paramsMock)
  })
  it('should return the data from repository and called one time', async () => {
    const fetchTransactionsService = new FetchTransactionsService(fethUserTransactionsRepo)
    const result = await fetchTransactionsService.exec({ id: 1 })
    console.log(result)
    expect(result).toBe(paramsMock)
    expect(fethUserTransactionsRepo.perform).toBeCalledTimes(1)
  })
})
