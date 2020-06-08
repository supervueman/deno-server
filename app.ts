import { UserI, CtxI } from './api/interfaces.ts';
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

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
		response.body = { users };
	})
	.get('/api/users/:id', ({ response, params }) => {
		const user: UserI | undefined = users.find(u => u.id === params.id);

		if (user) {
			response.status = 200;
			response.body = { user }
		} else {
			response.status = 404;
			response.body = { message: 'Not found' }
		}
	})
	.post('/api/users', async ({ response, request }) => {
		const body = await request.body();

		if (!request.hasBody) {
			response.status = 400;
			response.body = { message: 'Bad request' }
		} else {
			const user: UserI = body.value;
			const myUUID = v4.generate();

			user.id = myUUID;

			users.push(user);

			response.status = 201;
			response.body = { user }
		}
	})
	.put('/api/users/:id', async ({ params, response, request }) => {
		const user: UserI | undefined = users.find(u => u.id === params.id);

		if (user) {
			const body = await request.body();
			user.name = body.value.name;

			response.status = 200;
			response.body = { user }
		} else {
			response.status = 404;
			response.body = { message: 'Not found' }
		}
	});

app.use(router.routes())

console.log('http://localhost:8080');
await app.listen({ port: 8080 });
