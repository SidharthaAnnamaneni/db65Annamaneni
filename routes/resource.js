var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var kites_controller = require('../controllers/kites'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/kites', kites_controller.kites_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/kites/:id', kites_controller.kites_delete); 
 
// PUT request to update Costume. 
router.put('/kites/:id', kites_controller.kites_update_put); 
 
// GET request for one Costume. 
router.get('/kites/:id', kites_controller.kites_detail); 
 
// GET request for list of all Costume items. 
router.get('/kites', kites_controller.kites_list); 
 
module.exports = router; 