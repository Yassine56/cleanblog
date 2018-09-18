const User = require('../database/models/user');

module.exports = (req, res, next) => {

  User.findById(req.session.userid, (error, user) => {
    if(error || !user){
      return res.redirect('login');
    }
    next();
  })



}
