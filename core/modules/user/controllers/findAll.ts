import { users } from '../data/users.ts';

export default ({ response }: { response: any }) => {
	console.log(users)
	response.status = 200;
	response.body = { users };
}
