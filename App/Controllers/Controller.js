var App = require("../../Application")
var UseCaseOperator = require("../UseCases/Operator")

module.exports = class Controller {
    static async Render(grpcRequest) {
        try {
            let selector = App.Converters.GrpcRequest.ToTemplateSelector(grpcRequest);
            let renderData = App.Converters.GrpcRequest.ToRenderData(grpcRequest);
            let templateRenderOutput = await UseCaseOperator.RenderWithData(selector, renderData);
        }
        catch (erro) {
            throw erro;
        }
    }


}