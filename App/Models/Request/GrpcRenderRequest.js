module.exports = class GrpcRenderRequest {
    call;
    callback;
    constructor(call, callback) {
        this.call = call;
        this.callback = callback;
    }
}