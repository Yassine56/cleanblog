
const Post = require('../database/models/post');

module.exports = async (req, res) => {
  let posts = await Post.find({});
  console.log(posts);
  res.render('index',{
    posts
  });
}
