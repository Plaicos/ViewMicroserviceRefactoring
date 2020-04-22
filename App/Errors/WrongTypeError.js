var IIError = require("./IIError")

module.exports = class WrongTypeError extends IIError {
    constructor({ stack, message }) {
        super();
        if (!stack) {
            this.Stack = "Stack was not provided";
        }
        if (!message) {
            this.Message = "The given type is not an instance of the required type model"
        }
        this.Stack = stack;
        this.Message = message;
        this.Type = "Wrong Type Error"
    }
}