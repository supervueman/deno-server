import { Application, config } from './core/dependencies.ts';

// Routes
import userRouter from './core/modules/user/routes.ts';

// Env variables
const envVars = config();
const port = parseInt(envVars.PORT);

const app = new Application();

// Use routes
app.use(userRouter.routes())

console.log(`http://localhost:${port}`);
await app.listen({ port: port });
