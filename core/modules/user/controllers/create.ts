// Data
import { User } from '../models/index.ts';
// Interfaces
import { UserI } from '../interfaces.ts';

export default async ({ response, request }: { response: any; request: any }) => {
	const body: any = await request.body();

	if (!request.hasBody) {
		response.status = 400;
		response.body = { message: 'Bad request' }
	} else {

		const newUser: UserI = await User.create({
			name: body.value.name,
			email: body.value.email
		});

		response.status = 201;
		response.body = { newUser }
	}
}
