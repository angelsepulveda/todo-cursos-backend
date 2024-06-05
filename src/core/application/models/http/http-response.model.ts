export type HttpStatusResponse = 'successRequest' | 'createdRequest'
| 'badRequest' | 'unauthorizedRequest' | 'notFoundRequest' | 'internalServerErrorRequest'

export const HttpStatusMap: Record<HttpStatusResponse, number> = {
  successRequest: 200,
  badRequest: 400,
  createdRequest: 201,
  notFoundRequest: 404,
  internalServerErrorRequest: 500,
  unauthorizedRequest: 401
}

export interface ResponseModel<T> {
  type: HttpStatusResponse
  message: string
  body: T
}

export interface HttpResponseAdapterModel<T> extends ResponseModel<T> {
  code: number
}
