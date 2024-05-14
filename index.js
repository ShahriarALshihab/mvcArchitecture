const express=require('express'); 
require('dotenv').config(); 

const homeRoute=require('./routes/home.route'); 
const userRoute=require('./routes/user.route'); 
const productRoute=require('./routes/product.route'); 

const app=express(); 
const PORT=process.env.PORT; 

app.use(express.urlencoded({extended:true})); 
app.use(homeRoute); 
app.use(userRoute); 
app.use(productRoute); 



app.use((req,res,next)=>{
    res.status(404).send(`404 Not Found!`); 
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://127.0.0.1:${PORT}`); 
})

