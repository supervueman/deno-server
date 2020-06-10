import { config } from './dependencies.ts';

const server_env = config();

const env = {
	db_name: server_env.DB_NAME,
	db_host: server_env.DB_HOST,
	db_username: server_env.DB_USERNAME,
	db_password: server_env.DB_PASSSWORD,
	db_port: parseInt(server_env.DB_PORT),
	port: parseInt(server_env.PORT)
}

export { env }
