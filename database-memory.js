import { randomUUID } from "crypto"


export class DatabaseMemory {
    #clientes = new Map()

    list() {
       return Array.from(this.#clientes.entries()).map((clienteArray) =>{
        const id = clienteArray[0]
        const data = clienteArray[1]

        return{
            id,
            ...data,    
        }
       })
    }
      
    create(cliente) {
        const clienteId = randomUUID()


        this.#clientes.set(clienteId, cliente)
    }
    
    update(id, cliente){
        this.#clientes.set(id, cliente)
    }

    delete(id) {
        this.#clientes.delete(id)
    }

}