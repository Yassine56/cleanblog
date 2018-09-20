const Post = require('../database/models/post');
module.exports = async (req, res) => {
  let posts = await Post.find({}).populate('author').exec();
  console.log(posts);
  console.log(req.session);
  res.render('index',{
    posts
  });
}
