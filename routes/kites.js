var express = require('express'); 
const kites_controlers= require('../controllers/kites'); 
var router = express.Router(); 
 
/* GET kites */ 
router.get('/', kites_controlers.kites_view_all_Page ); 
module.exports = router; 
/* GET detail kites page */ 
router.get('/detail', kites_controlers.kites_view_one_Page); 
/* GET create kites page */ 
router.get('/create', kites_controlers.kites_create_Page); 