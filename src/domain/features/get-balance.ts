export interface GetBalance {
  exec: (params: GetBalance.Params) => Promise<GetBalance.Result>
}

export namespace GetBalance {
  export type Params = string
  export type Result = string
}
