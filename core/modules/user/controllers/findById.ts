import { User } from '../models/index.ts';

export default async ({ response, params }: { response: any, params: any }) => {
	const user = await User.find(params.id);

	if (user) {
		response.status = 200;
		response.body = { user }
	} else {
		response.status = 404;
		response.body = { message: 'Not found' }
	}
}
