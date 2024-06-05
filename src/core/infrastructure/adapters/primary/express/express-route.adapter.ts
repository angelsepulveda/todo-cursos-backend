import { type ControllerInputPort } from '@core/application/ports/input/controller/controller.port'
import { type NextFunction, type Request, type Response } from 'express'
import { HttpResponseAdapter } from '../http/response/http-response.adapter'
import { type HttpErrorAdapter } from '../errors/http-error.adapter'

export function expressRouteAdapter<T> (controller: ControllerInputPort<T>) {
  return async (request: Request, _response: Response, next: NextFunction) => {
    await Promise.resolve(
      controller.handleRequest({
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers
      }).then(ctrl => {
        next(HttpResponseAdapter.response(ctrl.body, ctrl.type, ctrl.message))
      }).catch((error: HttpErrorAdapter) => {
        next(HttpResponseAdapter.response([], error.type, error.message))
      })
    )
  }
}
