import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory() - usada em um banco na mémoria

const database = new DatabasePostgres()

server.post('/clientes', async (request, reply) => {
    const {name, description} = request.body

   await database.create({
        name,
        description
    })

    return reply.status(201).send()
})

server.get('/clientes', async (request) => {
    const search = request.query.search
    
    const clientes = await database.list(search)

    return clientes
})

server.put('/clientes/:id', async (request, reply) => {
    const clienteId = request.params.id 
    const { name, description } = request.body

    await database.update(clienteId, {
        name, 
        description
    })

    return reply.status(204).send()
})

server.delete('/clientes/:id', async (request, reply) => {
    const clienteId = request.params.id
    
    await database.delete(clienteId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.port ?? 3333
})

