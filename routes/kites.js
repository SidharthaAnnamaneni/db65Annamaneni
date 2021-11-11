var express = require('express'); 
const kites_controlers= require('../controllers/kites'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', kites_controlers.kites_view_all_Page ); 
module.exports = router; 