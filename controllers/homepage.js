
const Post = require('../database/models/post');

module.exports = async (req, res) => {
  let posts = await Post.find({});
  console.log(req.session);
  console.log(req.session);
  res.render('index',{
    posts
  });
}
