var express = require('express');
var Photo = require('./../model/photo')


var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

  // get all the users
  Photo.find({}, function(err, results) {
    if (err) throw err;

    // object of all the users
    console.log(results);
    res.send(results)
  });

});

// Create Photo - post

  router.route('/create').post(function (req, res) {
  const photo = new Photo(req.body);
  console.log(photo);
  photo.save()
    .then(photo => {
      res.json('photo added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
