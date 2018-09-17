const express = require('express');
const mongoose = require('mongoose');

const fileupload = require('express-fileupload');

const app = express();
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/cleanblogdb');

// MVC controllers

const createPostController = require('./controllers/createpost');

const homePageController = require('./controllers/homepage');

const storePostController = require('./controllers/storepost');

const getPostController = require('./controllers/getpost');

const createUserController = require('./controllers/createuser');

const storeUserController = require('./controllers/storeuser');
// custome middleware




const validatecreatepost = require('./middleware/storepost');




app.use('/posts/store', validatecreatepost);

app.use(require('express-edge'));

app.use(express.static('public'));

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(fileupload());

app.use(bodyParser.urlencoded())

app.listen(4000, () => {
  console.log('server listening on port 4000..');
})

// /////////     get requests

app.get('/auth/register', createUserController);

app.get('/post/:id', getPostController );

app.get('/', homePageController);

app.get('/newpost', createPostController )

//////////  post requests

app.post('/posts/store', storePostController);

app.post('/auth/register', storeUserController);
