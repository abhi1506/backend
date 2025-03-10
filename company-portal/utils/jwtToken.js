//create token and saving cookie

const sendToken =(user,statusCode,res)=>{
    const token = user.getJWTToken();
    
    //option for cookies

    // const options={
    //     expires:new Date(
    //         Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
    //     ),
    //     httpOnly:true
    // };
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 60 * 1000), // 20 minutes in milliseconds
        httpOnly: true
    };
    
    
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    });
};

module.exports=sendToken;