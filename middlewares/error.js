class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next)=>{
    const message = err.message || "Internal Server Error"
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
      Success:false,
      message
  })
  }

  export default ErrorHandler;