var express = require('express');
var User = require('./../model/user')


var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
    res.send(users)
  });

});

// Create User - post

  router.route('/create').post(function (req, res) {
  const user = new User(req.body);
  console.log(user);
  user.save()
    .then(user => {
      res.json('User added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
