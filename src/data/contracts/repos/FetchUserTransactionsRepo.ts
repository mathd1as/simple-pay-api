export interface FetchUserTransactionsRepo {
  perform: (params: FetchUserTransactionsRepo.Params) => Promise<FetchUserTransactionsRepo.Result>
}

export namespace FetchUserTransactionsRepo {
  export type Params = string
  export type Result = string
}
