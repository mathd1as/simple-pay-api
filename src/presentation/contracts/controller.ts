import { HttpRequest, HttpResponse } from './http'

export interface Controller<T = HttpRequest> {
  handle: (request: T) => Promise<HttpResponse>
}
