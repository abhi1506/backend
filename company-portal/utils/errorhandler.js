// class ErrorHandler extends Error{
//     constructor(message,statusCode){
//     super(message);
//     this.statusCode=statusCode


//     Error.captureStackTrace(this,this.constructor);
//     }

// }
// module.exports=errorHandler;

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;
