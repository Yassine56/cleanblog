const mongoose = require('mongoose');

const Post = require('./database/models/post');
const User = require('./database/models/user');
mongoose.connect('mongodb://localhost/cleanblogdb');

// Post.create({
//   title : "my toto",
//   description : "this is a description toto",
//   content : "this is a content toto"
// }, (error, post) => {
//   console.log(error, post);
// })


Post.find({}, (error, posts) => {
  console.log(error, posts);
})

User.find({}, (error, users) => {
  console.log(error, users);
})

// Post.findById('5b9bb7dee9053a469dd9a74b', (error, post) => {
//   console.log(error, post);
// })
