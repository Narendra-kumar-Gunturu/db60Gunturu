var express = require('express');
const chips_controlers= require('../controllers/chips');
var router = express.Router();
/* GET chipss */
router.get('/', chips_controlers.chips_view_all_Page );

/* GET detail chips page */
router.get('/detail', chips_controlers.chips_view_one_Page);

/* GET create chips page */
router.get('/create', chips_controlers.chips_create_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
   return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
 }

/* GET create update page */
router.get('/update',secured, chips_controlers.chips_update_Page);

/* GET create chips page */
router.get('/delete', chips_controlers.chips_delete_Page);



module.exports = router;