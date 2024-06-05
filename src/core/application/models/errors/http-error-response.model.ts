import { type ResponseModel } from '@core/application/models/http/http-response.model'

export interface ErrorParams {
  type: string
  message: string
}

export type HttpErrorResponseModel = Omit<ResponseModel<ErrorParams>, 'body' | 'typé'>
