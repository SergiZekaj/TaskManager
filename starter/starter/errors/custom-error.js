class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode)=>{
    return new CustomAPIError(message, statusCode)
}

module.exports = {CustomAPIError, createCustomError}

// Summary
// Purpose: super(message) calls the constructor of the parent Error class to initialize its message property. This ensures that your custom error class behaves like a standard error.
// Inheritance: It’s a necessary step in creating subclasses to properly inherit and initialize the parent class’s properties and methods.
// By using super(message), you ensure that your custom error class retains all the standard features of the Error class while adding any additional properties or methods you need.