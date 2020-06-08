import { Router } from '../../dependencies.ts';
import { findAll, findById, create, update, remove } from './controllers/index.ts';

const router = new Router();

router
	.get('/api/users', findAll)
	.get('/api/users/:id', findById)
	.post('/api/users', create)
	.put('/api/user/:id', update)
	.delete('/api/user/:id', remove)

export default router;
