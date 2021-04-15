var express = require('express');
const chips_controlers= require('../controllers/chips');
var router = express.Router();
/* GET chipss */
router.get('/', chips_controlers.chips_view_all_Page );

/* GET detail chips page */
router.get('/detail', chips_controlers.chips_view_one_Page);

/* GET create chips page */
router.get('/create', chips_controlers.chips_create_Page);

/* GET create update page */
router.get('/update', chips_controlers.chips_update_Page);

/* GET create chips page */
router.get('/delete', chips_controlers.chips_delete_Page);



module.exports = router;