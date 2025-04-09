import { config } from 'dotenv';
config();

import { neon } from '@neondatabase/serverless';

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Adicione esta linha para depuração

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida. Verifique o arquivo .env ou as variáveis de ambiente.');
}

const sql = neon(process.env.DATABASE_URL);

export { sql };