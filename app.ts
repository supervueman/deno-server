import { UserI, CtxI } from './api/interfaces.ts';
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

const users: UserI[] = [{
	id: '1',
	name: 'Rinat'
}, {
	id: '2',
	name: 'Sveta'
}];

router
	.get('/api/users', ({ response }) => {
		response.status = 200;
		response.body = {
			users
		};
	})
	.get('/api/users/:id', ({ response, params }) => {
		const user: UserI | undefined = users.find(u => u.id === params.id);

		if (user) {
			response.status = 200;
			response.body = {
				user
			}
		} else {
			response.status = 404;
			response.body = {
				message: 'Not found'
			}
		}
	});

app.use(router.routes())

console.log('http://localhost:8080');
await app.listen({ port: 8080 });
