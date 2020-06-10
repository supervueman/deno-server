import { Model, DataTypes } from '../../../dependencies.ts';

class User extends Model {
	static table = 'users';

	static timestamps = true;

	static fields = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			unique: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	}
}

export { User }
