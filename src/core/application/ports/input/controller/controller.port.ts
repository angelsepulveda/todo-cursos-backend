import { type HttpRequestModel } from '@core/application/models/http/http-request.model'
import { type ResponseModel } from '@core/application/models/http/http-response.model'

export interface ControllerInputPort<T = unknown> {
  handleRequest: (request: HttpRequestModel) => Promise<ResponseModel<T>>
}
