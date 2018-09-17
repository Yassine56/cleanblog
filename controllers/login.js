
const User = require('../database/models/user');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {

const {email, password} = req.body;
User.findOne({email}, (error, user)=> {
  if(user){
    bcrypt.compare(password, user.password, (error, same) => {
      if(same){

        req.session.userid = user._id;

         res.redirect('/');
      }
      else {
        return res.redirect('/auth/login');
      }
    })
  }
  else {
    return res.redirect('/auth/login');
  }
})



}
