export interface Authentication {
  exec: (params: Authentication.Params) => Promise<Authentication.Reuslt>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Reuslt = { accessToken: String }
}
