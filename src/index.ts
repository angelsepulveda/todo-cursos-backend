import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'
import { HttpServerAdapter } from '@core/infrastructure/adapters/primary/express/http-server.adapter'

void main()

async function main(): Promise<void> {
    const httpServer = new HttpServerAdapter()
    await httpServer.start(4000);
}