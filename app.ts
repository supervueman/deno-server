import { Application, config } from './core/dependencies.ts';
import { Database } from 'https://deno.land/x/denodb/mod.ts';
// Routes
import userRouter from './core/modules/user/routes.ts';

const db = new Database('postgres', {
	database: 'test_db_deno',
	host: 'localhost',
	username: 'postgres',
	password: 'fer1nan2s',
	port: 5432, // optional
});

// Env variables
const envVars = config();
const port = parseInt(envVars.PORT);

const app = new Application();

// Use routes
app.use(userRouter.routes())

console.log(`http://localhost:${port}`);
await app.listen({ port: port });
