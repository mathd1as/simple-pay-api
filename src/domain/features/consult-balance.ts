export interface ConsultBalance {
  exec: (params: ConsultBalance.Params) => Promise<ConsultBalance.Result>
}

export namespace ConsultBalance {
  export type Params = { id: number }
  export type Result = {
    available: number
    waitingFunds: number
  }
}
