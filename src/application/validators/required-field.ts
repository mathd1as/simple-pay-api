import { Validator } from '@/application/validators/validator'
import { RequiredFieldError } from '@/application/errors/validator'

export class RequiredField implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string
  ) {}

  validate (): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
