const path=require('path');

const users=require('./../models/user.model'); 

exports.getUser=(req,res)=>{
     res.sendFile(path.join(__dirname+'./../views/user.html')); 
    
}

exports.saveUser=(req,res,next)=>{
    const name=req.body.name; 
    const age=Number(req.body.age); 

    const newUser={
        name,age,
    }; 

    users.push(newUser); 
    res.status(201).json({
        success:true, 
        users,
    }); 
}; 