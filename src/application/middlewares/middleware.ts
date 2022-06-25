import { HttpResponse } from '@/application/helpers/http'

export interface Middleware {
  handle: (httpRequest: any) => Promise<HttpResponse>
}
