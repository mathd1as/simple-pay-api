import { HttpResponse } from '@/application/helpers'
import { User } from '@/domain/entities/models/user'

export interface CreateUser {
  exec: (params: CreateUser.Params) => Promise<CreateUser.Result>
}

export namespace CreateUser {
  export type Params = User
  export type Result = { id: number } | HttpResponse<Error>
}
