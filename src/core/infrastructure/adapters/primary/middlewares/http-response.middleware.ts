import { type HttpResponseAdapterModel } from '@core/application/models/http/http-response.model'
import { type NextFunction, type Request, type Response } from 'express'
import { HttpResponseAdapter } from '../http/response/http-response.adapter'

export function httpResponseMiddleware<T> (api: HttpResponseAdapterModel<T>,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (api instanceof HttpResponseAdapter) {
    res.status(api.code).json({ message: api.message, data: api.body })
  }
}
