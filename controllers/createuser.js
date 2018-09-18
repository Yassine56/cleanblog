module.exports = (req, res) => {
console.log(req.flash('data')[0]);
  res.render('register', {
    errors: req.flash('registrationErrors'),
    data : req.flash('data')[0]
  })
}
