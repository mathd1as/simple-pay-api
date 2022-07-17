export interface GetBalance {
  exec: (params: GetBalance.Params) => Promise<GetBalance.Result>
}

export namespace GetBalance {
  export type Params = { id: number }
  export type Result = {
    available: number
    waitingFunds: number
  }
}
