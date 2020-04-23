module.exports = class GrpcRequestConverter {
    static ToRenderData(grpcRequest) {
        this.ValidateGrpcRequest(grpcRequest);
    }

    static ToTemplateSelector(grpcRequest) {
        this.ValidateGrpcRequest(grpcRequest);
    }

    static ValidateGrpcRequest(grpcRequest) {
        try {
            if (!grpcRequest instanceof App.Models.Request.GrpcRequest) {
                throw new App.Errors.WrongType({ error: new Error() })
            }
        }
        catch (erro) {
            throw erro;
        }
    }
}