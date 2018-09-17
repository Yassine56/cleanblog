
module.exports = (req, res, next) => {
  if(!req.files || !req.body.author || !req.body.description || !req.body.content || !req.body.title ){
    console.log("not working");
    return res.redirect('/newpost')
  }
  next();
}
