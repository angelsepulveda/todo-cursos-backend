import { httpResponseMiddleware } from '@core/infrastructure/adapters/primary/middlewares/http-response.middleware'
import { type Application } from 'express'

export function setupResponseMiddleware (app: Application): void {
  app.use(httpResponseMiddleware)
}
