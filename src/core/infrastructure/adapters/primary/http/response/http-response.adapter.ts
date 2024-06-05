import { type HttpResponseAdapterModel, HttpStatusMap, type HttpStatusResponse, type ResponseModel } from '@core/application/models/http/http-response.model'

export class HttpResponseAdapter<T> implements ResponseModel<T> {
  constructor (public readonly type: HttpStatusResponse,
    public readonly message: string,
    public readonly body: T,
    public readonly code: number) { }

  static response<T>(body: T, type: HttpStatusResponse, message: string): HttpResponseAdapterModel<T> {
    return new HttpResponseAdapter<T>(type, message, body, HttpStatusMap[type])
  }
}
