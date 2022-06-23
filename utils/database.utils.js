const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'gabriel1',
	port: 5432,
	database: 'check-in-out',
});

module.exports = { db, DataTypes };
