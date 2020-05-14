var App = require("../../../Application")
var Controller = require("../../../App/Controllers/Controller")

//MUST implement the .proto file
module.exports = class gRPCServcieImplementation {
    async GetTemplate(call, callback) {
        try {
            let grpcRequest = new App.Models.Request.GrpcRenderRequest(call, callback);
            let grpcResponse = await Controller.Render(grpcRequest);
            callback(null, grpcResponse);
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    HandleError(callback, error) {
        try {
            //console.log(error)
            return callback({
                message: error.message
            })
        }
        catch (erro) {
            throw erro;
        }
    }
}