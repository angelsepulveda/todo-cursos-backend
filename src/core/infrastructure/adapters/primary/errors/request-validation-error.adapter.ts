import { type HttpStatusResponse } from '@core/application/models/http/http-response.model'
import { HttpErrorAdapter } from './http-error.adapter'

export class RequestValidationErrorAdapter extends HttpErrorAdapter {
  constructor (public readonly message: string, public readonly type: HttpStatusResponse) {
    super(message, type)
  }

  static handleError (message: string): RequestValidationErrorAdapter {
    return new RequestValidationErrorAdapter(message, 'badRequest')
  }
}
