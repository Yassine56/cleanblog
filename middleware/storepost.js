
module.exports = (req, res, next) => {
  if(!req.files || !req.body.description || !req.body.content || !req.body.title ){
    console.log(req.files);
    console.log(req.body);
    console.log("not working");
    return res.redirect('/newpost')
  }
  next();
}
