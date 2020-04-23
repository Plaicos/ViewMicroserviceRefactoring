var IIError = require("./IIError")

module.exports = class WrongTypeError extends IIError {
    constructor({ error, message }) {
        super();
        if (!error || !error instanceof Error) {
            error = "Stack is unknown";
        }
        if (!message) {
            this.Message = "The given type is not an instance of the required type model"
        }
        this.Stack = error.stack;
        this.Message = message;
        this.Type = "Wrong Type Error"
    }
}