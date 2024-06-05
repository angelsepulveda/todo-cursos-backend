import { type ResponseModel } from '@core/application/models/http/http-response.model'

export interface HttpResponseOutputPort<T> {
  handleResponse: (body: T, message: string) => Promise<ResponseModel<T>>
}
