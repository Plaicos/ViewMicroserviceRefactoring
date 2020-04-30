var App = require("../../Application")

module.exports = class TemplateRenderOutputConverter {
    static ToGrpcRenderResponse(renderOutput) {
        let grpcRenderResponse = new App.Models.Response.GrpcRender();
        try {
            this.PvdValidateRenderOutput();
            grpcRenderResponse.html = renderOutput.RenderedTemplateString;
            return grpcRenderResponse;
        }
        catch (erro) {
            throw erro;
        }
    };

    static PvdValidateRenderOutput(renderOutput) {
        try {
            if (!renderOutput instanceof App.Models.RenderOutput) {
                throw new App.Errors.WrongType({ error: new Error })
            }
            return
        }
        catch (erro) {
            throw erro;
        }
    }
}