// this is custom error class ExpressError that extends default Error class

class ExpressError extends Error {   // it extends built in Error class
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message; 
    }
}

module.exports = ExpressError;