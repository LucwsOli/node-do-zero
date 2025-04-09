import { sql } from './db.js'

async function createTable() {
  try {
    await sql`
      CREATE TABLE clientes (
        id           TEXT PRIMARY KEY,
        name         TEXT,
        description  TEXT
      );
    `;
    console.log('Tabela "clientes" criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
}

createTable();
