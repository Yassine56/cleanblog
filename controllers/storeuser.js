const User = require('../database/models/user');
module.exports = (req, res) => {
  User.create(req.body, (error,user) => {
    if (error){
      const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
      req.flash('data', req.body);
      req.flash('registrationErrors',registrationErrors);
      return res.redirect('/auth/register');
    }
    else {
      res.redirect('/');
    }
  })
}
