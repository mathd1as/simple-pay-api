export interface FetchUserTransactions {
  exec: (params: FetchUserTransactions.Params) => Promise<FetchUserTransactions.Result>
}

export namespace FetchUserTransactions {
  export type Params = string
  export type Result = string
}
