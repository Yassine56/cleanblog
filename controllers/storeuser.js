const User = require('../database/models/user');

module.exports = (req, res) => {
  User.create(req.body, (error,user) => {
    if (error){
      console.log(error);
      res.redirect('/auth/register');
    }
    else {
      res.redirect('/');
    }
  })
}
