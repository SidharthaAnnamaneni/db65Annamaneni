var express = require('express'); 
const kites_controlers= require('../controllers/kites'); 
var router = express.Router(); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET kites */ 
router.get('/', kites_controlers.kites_view_all_Page ); 
module.exports = router; 
/* GET detail kites page */ 
router.get('/detail', kites_controlers.kites_view_one_Page); 
/* GET create  page */ 
router.get('/create',secured, kites_controlers.kites_create_post); 
/* GET create update page */ 
router.get('/update',secured, kites_controlers.kites_update_Page); 
/* GET create costume page */ 
router.get('/delete',secured, kites_controlers.kites_delete_Page); 