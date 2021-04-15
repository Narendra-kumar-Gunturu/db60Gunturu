var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var chips_controller = require('../controllers/chips');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/chips', chips_controller.chips_create_post);
// DELETE request to delete Handbag.
router.delete('/chips/:id', chips_controller.chips_delete);
// PUT request to update Handbag.
router.put('/chips/:id', chips_controller.chips_update_put);
// GET request for one Handbag.
router.get('/chips/:id', chips_controller.chips_detail);
// GET request for list of all Handbag.
router.get('/chips', chips_controller.chips_list);
module.exports = router;