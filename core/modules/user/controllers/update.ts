import { User } from '../models/index.ts';

export default async ({ params, response, request }: { params: any, response: any, request: any }) => {
	const body = await request.body();
	console.log(body)
	console.log(params)
	const user = await User.where('id', params.id).update(body.value);
	console.log(user)

	if (user) {
		// await user.update(body)
		response.status = 200;
		response.body = { user }
	} else {
		response.status = 404;
		response.body = { message: 'Not found' }
	}
}
