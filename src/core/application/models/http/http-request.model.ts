export interface HttpRequestModel<body = any, Params = any, Query = any, Headers = any, Data = any> {
  body?: body
  params?: Params
  query?: Query
  headers?: Headers
  data?: Data
}
