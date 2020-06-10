import { v4 } from '../dependencies.ts';
// Data
import { users } from '../data/users.ts';
import { User } from '../models/index.ts';
// Interfaces
import { UserI } from '../interfaces.ts';

export default async ({ response, request }: { response: any; request: any }) => {
	const body: any = await request.body();

	if (!request.hasBody) {
		response.status = 400;
		response.body = { message: 'Bad request' }
	} else {
		await User.create({
			name: 'Rinat',
			email: 'supervueman@gmail.com'
		})
		const user: UserI = body.value;
		const myUUID = v4.generate();

		user.id = myUUID;

		users.push(user);

		response.status = 201;
		response.body = { user }
	}
}
