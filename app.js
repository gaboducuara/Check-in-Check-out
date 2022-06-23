const express = require('express');

//Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/posts.routes');

// utils
const { db } = require('./utils/database.utils');

//init express app
const app = express();

app.use(express.json()); //-------- parte del metodo para enviar datos del back-end

//Define endpoints
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(2200, () => {
	console.log('Express app running!!!');
});
