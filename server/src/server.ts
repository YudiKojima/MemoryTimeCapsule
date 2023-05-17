import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// Metodos de HTTP: GET(listar), POST(criar), PUT(atualizar), PATCH(atualizar uma informação especifica), DELETE(deletar)

app.register(cors, {
    origin: true,
})

app.register(memoriesRoutes) 

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})