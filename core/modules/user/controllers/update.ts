import { users } from '../data/users.ts';
// Interfaces
import { UserI } from '../interfaces.ts'

export default async ({ params, response, request }: { params: any, response: any, request: any }) => {
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
}
