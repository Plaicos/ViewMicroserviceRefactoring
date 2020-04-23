var App = require("../../../Application")
var Controller = require("../../../App/Controllers/Controller")

//MUST implement the .proto file
module.exports = class gRPCServcieImplementation {
    async GetTemplate(call, callback) {
        callback(null, { html: "html source code" });
        return;
    }
}