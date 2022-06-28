import { User } from '@/domain/models/user'

export interface CreateUserRepo {
  perform: (param: CreateUserRepo.Params) => Promise<CreateUserRepo.Result>
  validateEmail: (params: { email: string }) => Promise<boolean>
}

export namespace CreateUserRepo {
  export type Params = User
  export type Result = { id: number }
}
