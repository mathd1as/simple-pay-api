export interface AuthenticationRepo {
  verifyUser: (params: AuthenticationRepo.Params) => Promise<AuthenticationRepo.Result>
}

export namespace AuthenticationRepo {
  export type Params = { email: string }
  export type Result = {
    password: string
  }
}
