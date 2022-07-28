import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { ProcessTransactionDTO } from '@/application/dtos/process-transaction-dto'
import { ValidationBuilder as Builder } from '@/application/validators/validation-builder'
import { Validator } from '../validators/validator'
import { Controller } from './controller'
import { ProcessTransaction } from '@/domain/features'

type HttpRequest = {
  body: ProcessTransactionDTO
  locals: { user: { id: number }}
}

export class ProcessTransactionController extends Controller {
  constructor (private readonly processTransactionService: ProcessTransactionService) {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    const transactionBaseData = {
      value: httpRequest.body.value,
      description: httpRequest.body.description,
      paymentMethod: httpRequest.body.paymentMethod,
      cardNumber: httpRequest.body.cardNumber,
      cardHolderName: httpRequest.body.cardHolderName,
      cardExpiringDate: httpRequest.body.cardExpiringDate,
      securityCode: httpRequest.body.securityCode,
      userId: httpRequest.locals.user.id
    }

    try {
      const result = await this.processTransactionService.exec(transactionBaseData)
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }

  override buildValidators (payload: ProcessTransaction.Params): Validator[] {
    return [
      ...Builder.of({ value: payload.value, fieldName: 'value' }).required().build(),
      ...Builder.of({ value: payload.description, fieldName: 'description' }).required().isString().build(),
      ...Builder.of({ value: payload.paymentMethod, fieldName: 'paymentMethod' }).required().isString().build(),
      ...Builder.of({ value: payload.cardNumber, fieldName: 'cardNumber' }).required().build(),
      ...Builder.of({ value: payload.cardHolderName, fieldName: 'cardHolderName' }).required().isString().build(),
      ...Builder.of({ value: payload.securityCode, fieldName: 'securityCode' }).required().build(),
      ...Builder.of({ value: payload.cardExpiringDate, fieldName: 'cardExpiringDate' }).required().isString().build()
    ]
  }
}
