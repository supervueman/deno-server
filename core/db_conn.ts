import { Database } from './dependencies.ts';
import { env } from './config.ts';

const db = new Database('postgres', {
	database: env.db_name,
	host: env.db_host,
	username: env.db_username,
	password: env.db_password,
	port: env.db_port,
});

export { db }
