import { HttpRequest, HttpResponse } from '../contracts/http'

export interface Controller<T = HttpRequest> {
  handle: (request: T) => Promise<HttpResponse>;
}
