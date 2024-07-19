const {validateToken}=require("../services/authenticaton")

function checkForAuthenticationCookie(cookieName){
return (req,res,next)=>{
    const tokenCookieValue=req.cookies[cookieName]

    if(!tokenCookieValue){
       return  next();
    }

    try{
        const userPayLoad=validateToken(tokenCookieValue);
        req.user=userPayLoad;
    }
    catch(error){

    }
    return next();
}
}

module.exports={
    checkForAuthenticationCookie
}