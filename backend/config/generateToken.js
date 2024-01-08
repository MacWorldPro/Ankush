const jwt=require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},"gullyboys",{
        expiresIn:"5d",
    });
};

module.exports=generateToken;