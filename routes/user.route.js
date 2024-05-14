const express=require('express'); 
const { getUser, saveUser } = require('../controllers/user.controller');

const route=express.Router(); 

route.get('/users',getUser); 

route.post('/users',saveUser); 

module.exports=route; 