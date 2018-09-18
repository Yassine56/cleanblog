const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user',
    required : true
  },

  title : String,

  description : String,

  content : String,

  image : String,

  createdat : {
    type : Date,
    default : new Date()
  }
});

const  Post = mongoose.model('Post', PostSchema);

module.exports = Post;
