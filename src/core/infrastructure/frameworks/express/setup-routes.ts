import { Application } from "express"
import { HttpResponseAdapter } from "../../adapters/primary/http/response/http-response.adapter"
import { APIModel } from "@core/application/models/api/api.model"

export function setupRoutes(app: Application, api: APIModel[]): void {
    api.forEach(route => {
        app.use(route.path, route.controller)
    })

    app.use((_req, _res, next) => {
        next(HttpResponseAdapter.response({}, 'internalServerErrorRequest', 'Endpoint not found'))
    })
}