import { type HttpErrorResponseModel } from '@core/application/models/errors/http-error-response.model'
import { HttpStatusMap, type HttpStatusResponse } from '@core/application/models/http/http-response.model'

export class HttpErrorAdapter extends Error implements HttpErrorResponseModel {
  public code: number
  public type: HttpStatusResponse

  constructor (message: string, type: HttpStatusResponse) {
    super(message)
    this.message = message
    this.code = HttpStatusMap[type]
  }
}
