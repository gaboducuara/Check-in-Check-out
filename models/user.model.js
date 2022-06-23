const {
	db,
	DataTypes,
} = require('../utils/database.utils');

//Create our first model (table)
const User = db.define('user', {
	id: {
		primaryKey: true,
		type: DataTypes.NUMBER,
		autoIncrement: true,
		allowNull: false,
	},
	entranceTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});
module.exports = { User };
