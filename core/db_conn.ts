import { Database } from './dependencies.td';

export default new Database('postgres', {
	database: config.DB_NAME,
	host: config.DB_HOST,
	username: config.DB_USERNAME,
	password: config.DB_PASSWORD,
	port: config.DB_PORT,
});
