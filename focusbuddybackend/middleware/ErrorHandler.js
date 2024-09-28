const errorConstants = require('../constants/errorConstants');


function errorHandler(err, req, res, next){
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case errorConstants.VALIDATION_ERROR:
                res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack});
                break;
        case errorConstants.UNAUTHORIZED:
                res.json({title:"Unauthorized",message:err.message,stackTrace:err.stack});
                break;
        case errorConstants.FORBIDDEN:
                res.json({title:"Forbidden",message:err.message,stackTrace:err.stack});
                break;
        case errorConstants.NOT_FOUND:
                res.json({title:"Not Found",message:err.message,stackTrace:err.stack});
                break;
        case errorConstants.SERVER_ERROR:
                res.json({title:"Serve Error",message:err.message,stackTrace:err.stack});
                break;
        default: 
                console.log('No Error, All is well !',err);
                break;
    }   
}


module.exports  = errorHandler;