const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

const Post = require('./database/models/post');

mongoose.connect('mongodb://localhost/cleanblogdb');


app.use(require('express-edge'));

app.use(express.static('public'));

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded())

app.listen(4000, () => {
  console.log('server listening on port 4000..');
})

app.post('/posts/store', (req, res) => {

  Post.create({
    title : req.body.title,
    description : req.body.description,
    content : req.body.content
  }, (error, post) => {
    console.log(post);
    res.redirect('/');
  })
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/post', (req,res) => {
  res.render('post');
})

app.get('/contact', (req,res) => {
  res.render('contact');
})

app.get('/newpost', (req,res) => {
  res.render('create');
})
