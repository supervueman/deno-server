import { Application } from './core/dependencies.ts';
import { env } from './core/config.ts';
import { db } from './core/db_conn.ts';
import { models } from './core/models.ts';

db.sync({ drop: true });
db.link([...models])

// Routes
import userRouter from './core/modules/user/routes.ts';

// Env variables

const app = new Application();

// Use routes
app.use(userRouter.routes())

console.log(`http://localhost:${env.port}`);
await app.listen({ port: env.port });
