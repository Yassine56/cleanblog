const User = require('../database/models/user');

module.exports = (req, res) => {
  User.create(req.body, (error,user) => {
    res.redirect('/');
  })
}
