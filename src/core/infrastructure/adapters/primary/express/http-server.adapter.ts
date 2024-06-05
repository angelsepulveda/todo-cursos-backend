import { APIModel } from "@core/application/models/api/api.model"
import { setupGlobalMiddleware } from "@core/infrastructure/frameworks/express/setup-global.middleware"
import { setupProxy } from "@core/infrastructure/frameworks/express/setup-proxy"
import { setupResponseMiddleware } from "@core/infrastructure/frameworks/express/setup-response-middleware"
import { setupRoutes } from "@core/infrastructure/frameworks/express/setup-routes"
import express, { Express } from "express"

export class HttpServerAdapter {
    private readonly app: Express
    private readonly controllers: APIModel[] = []

    constructor() {
        this.app = express()
    }

    public addController(ctrl: APIModel): void {
        this.controllers.push(ctrl)
    }

    public async start(serverPort: number): Promise<void> {
        setupProxy(this.app)
        setupGlobalMiddleware(this.app)
        setupRoutes(this.app, this.controllers);
        setupResponseMiddleware(this.app)
        this.app.listen(serverPort, () => {
            console.log(`Server running on port ${serverPort}`)
        })
    }
}