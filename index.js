const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const fileupload = require('express-fileupload');

const app = express();
const bodyParser = require('body-parser');

const Post = require('./database/models/post');




const createPostController = require('./controllers/createpost');

const homePageController = require('./controllers/homepage');

const storePostController = require('./controllers/storepost');

const getPostController = require('./controllers/getpost');





const validatecreatepost = (req, res, next) => {
  if(!req.files || !req.body.author || !req.body.description || !req.body.content || !req.body.title ){
    console.log("not working");
    return res.redirect('/newpost')
  }
  next();
}



mongoose.connect('mongodb://localhost/cleanblogdb');

app.use(require('express-edge'));

app.use(express.static('public'));

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(fileupload());

app.use(bodyParser.urlencoded())

app.listen(4000, () => {
  console.log('server listening on port 4000..');
})





app.post('/posts/store', storePostController);

app.get('/post/:id', getPostController );

app.use('/posts/store', validatecreatepost);

app.get('/', homePageController);

app.get('/newpost', createPostController )
