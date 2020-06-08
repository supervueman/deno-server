import { users } from '../data/users.ts';
// Interfaces
import { UserI } from '../interfaces.ts';

export default ({ response, params }: { response: any, params: any }) => {
	const user: UserI | undefined = users.find(u => u.id === params.id);

	if (user) {
		response.status = 200;
		response.body = { user }
	} else {
		response.status = 404;
		response.body = { message: 'Not found' }
	}
}
