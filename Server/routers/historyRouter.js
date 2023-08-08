const router = require('express').Router(); 


const historygetter= require('../controllers/historygetter');   


router.post('/' , historygetter.history ); 
router.get('/get',  historygetter.gethistory );
module.exports = router; 