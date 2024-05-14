const express=require('express'); 
const { enlistProduct, getProduct } = require('../controllers/product.controller');

const route=express.Router(); 

route.get('/products',enlistProduct); 

route.post('/products',getProduct ); 

module.exports=route; 

