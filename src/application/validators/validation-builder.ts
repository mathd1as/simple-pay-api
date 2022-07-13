import { IsString } from './is-string'
import { RequiredField } from './required-field'
import { Validator } from './validator'

export class ValidationBuilder {
  private constructor (
    private readonly value: any,
    private readonly fieldName?: string,
    private readonly validators: Validator[] = []
  ) {}

  static of ({ value, fieldName }: { value: any, fieldName?: string }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredField(this.value, this.fieldName))
    return this
  }

  isString (): ValidationBuilder {
    this.validators.push(new IsString(this.value, this.fieldName))
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}
