const express = require('express');
const router = express.Router();
const knex = require('./db/knex');
const Modules = require('./db/modules');

router.get('/', function(req, res, next) {
  if (req.user.loggedIn === true) {
    res.redirect('createhunt', { user: req.user } );
  } else {
    res.redirect('landing', { error: "You need to be logged in to create a hunt" });
    }
});

router.post('/', function(req, res, next) {
  Modules.hunts().insert({
    hunt_name: req.body.hunt_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    general_location: req.body.general_location,
    general_description: req.body.general_description,
  }
});




module.exports = router;
