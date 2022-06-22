export interface AuthenticationRepo {
  verifyUser: (params: AuthenticationRepo.Params) => Promise<AuthenticationRepo.Result>
}

export namespace AuthenticationRepo {
  export type Params = { id: String }
  export type Result = Boolean
}
