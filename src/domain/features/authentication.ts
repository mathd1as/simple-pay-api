export interface Authentication {
  exec: (params: Authentication.Params) => Promise<Authentication.Reuslt>
}

export namespace Authentication {
  export type Params = { username: String }

  export type Reuslt = { accessToken: String }
}
