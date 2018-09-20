const express = require('express');

const mongoose = require('mongoose');

const fileupload = require('express-fileupload');

const expressSession = require('express-session');

const bodyParser = require('body-parser');

const connectFlash = require('connect-flash');

const edge = require('edge.js');

const connectMongo = require('connect-mongo');

const mongoStore = connectMongo(expressSession);
mongoose.connect('mongodb://localhost/cleanblogdb');

// MVC controllers
const loginPageController = require('./controllers/loginpage');

const loginController = require('./controllers/login');

const createPostController = require('./controllers/createpost');

const homePageController = require('./controllers/homepage');

const storePostController = require('./controllers/storepost');

const getPostController = require('./controllers/getpost');

const createUserController = require('./controllers/createuser');

const storeUserController = require('./controllers/storeuser');

const logoutController = require('./controllers/logout');

const app = express();




app.use(expressSession({
  secret: 'macbook cat key',
  store : new mongoStore({
    mongooseConnection : mongoose.connection
  })
}));

app.use(connectFlash());

app.use(require('express-edge'));

app.use(express.static('public'));

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(fileupload());

app.use(bodyParser.urlencoded());



// globale middleware

app.use('*', (req, res, next) => {
  edge.global('auth', req.session.userid);
  next();
})

// custome middleware

const redirectifauth = require('./middleware/redirectifauth');

const auth = require ('./middleware/auth');

const validatecreatepost = require('./middleware/storepost');








app.listen(4000, () => {
  console.log('server listening on port 4000..');
})

// /////////     get requests
app.get('/auth/login',redirectifauth, loginPageController);

app.get('/auth/register',redirectifauth, createUserController);

app.get('/post/:id', getPostController );

app.get('/', homePageController);

app.get('/newpost', auth, createPostController );

app.get('/auth/logout', auth, logoutController);


//////////  post requests
app.post('/user/login', loginController);

app.post('/posts/store',validatecreatepost, storePostController);

app.post('/auth/register', storeUserController);
