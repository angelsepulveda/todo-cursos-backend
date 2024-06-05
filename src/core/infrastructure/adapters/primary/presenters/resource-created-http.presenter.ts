import { type ResponseModel } from '@core/application/models/http/http-response.model'
import { type HttpResponseOutputPort } from '@core/application/ports/output/http/http-response.port'

export class ResourceCreatedHttpPresenter<T> implements HttpResponseOutputPort<T> {
  async handleResponse (body: T, message: string): Promise<ResponseModel<T>> {
    return {
      type: 'createdRequest',
      body,
      message
    }
  }
}
