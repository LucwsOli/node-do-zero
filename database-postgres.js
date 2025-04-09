import { randomUUID } from "crypto"
import { sql } from './db.js'


export class DatabasePostgres {

    async list(search = '') {
        let clientes

        if (search) {

            clientes = await sql `select * from clientes where name like ${'%' + search + '%'}`

        } else {
            clientes = await sql `select * from clientes`
        }

        return clientes
 
        }
      
    async create(cliente) {
        const clienteId = randomUUID()
        const { name, description } = cliente

        await sql `insert into clientes (id, name, description) VALUES (${clienteId}, ${name}, ${description})`

    }
    
   async update(id, cliente){

        const { name, description } = cliente

        await sql `update clientes set name = ${name}, description = ${description} WHERE id = ${id}`
    }

    async delete(id) {

        await sql `delete from clientes where id = ${id}`

    }

}