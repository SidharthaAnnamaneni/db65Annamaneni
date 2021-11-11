var kites = require('../models/kites'); 
 
// List of all Costumes 
exports.kites_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: kites list'); 
}; 
 
// for a specific Costume. 
exports.kites_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: kites detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.kites_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: kites create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.kites_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: kites delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.kites_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: kites update PUT' + req.params.id); 
}; 