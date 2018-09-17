const Post = require('../database/models/post');

module.exports = async (req, res) => {

  console.log(req.params);
  let post = await Post.findById(req.params.id);
  console.log("working");
  res.render('post', {
    post
  });

}
