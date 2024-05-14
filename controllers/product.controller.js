const path=require('path'); 

const products=require('./../models/product.model'); 

exports.enlistProduct=(req,res)=>{
    res.sendFile(path.join(__dirname+'./../views/products.html')); 
}

exports.getProduct=(req,res)=>{
    const id=Number(req.body.id); 
    const name=req.body.name; 
    const date=req.body.date; 

    const newProduct={
        id,name,date,
    }; 

    products.push(newProduct); 
    res.status(201).json({
        Success:true,
        products,
    })
}; 