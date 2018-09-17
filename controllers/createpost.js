module.exports = (req, res) => {
  if(req.session.userid){
       res.render('create');
  }
  else {
    return res.render('login');
  }
}
