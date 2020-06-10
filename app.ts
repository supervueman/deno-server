import { Application } from './core/dependencies.ts';
import { env } from './core/config.ts';
import { db } from './core/db_conn.ts';

// Models
import { User } from './core/modules/user/models/index.ts';

db.link([User])
db.sync();

// Routes
import userRouter from './core/modules/user/routes.ts';

// Env variables

const app = new Application();

// Use routes
app.use(userRouter.routes())

console.log(`http://localhost:${env.port}`);
await app.listen({ port: env.port });
