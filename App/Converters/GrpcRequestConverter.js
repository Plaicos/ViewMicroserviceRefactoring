var App = require("../../Application")

module.exports = class GrpcRequestConverter {
    static ToRenderData(grpcRequest) {
        try {
            this.ValidateGrpcRequest(grpcRequest);
            let params = new App.Models.Params();
            let renderData = new App.Models.RenderData();
            renderData.Params = this.PvdBuildParams();
            renderData.Session = this.PvdBuildSession(grpcRequest.call);
            renderData.Templates = App.Dependencies.TemplateLibrary.TemplateLibraries;
            console.log(renderData.Templates);
            
            return renderData;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToTemplateSelector(grpcRequest) {
        try {
            this.ValidateGrpcRequest(grpcRequest);
            return this.PvdBuildSelector(grpcRequest.call.request.selector)
        }
        catch (erro) {
            throw erro;
        }
    }

    // this "selector" comes from the .proto file
    static PvdBuildSelector(selector) {
        try {
            let templateSelector = new App.Models.TemplateSelector();
            templateSelector.Library = selector.lib;
            templateSelector.Subject = selector.subject;
            templateSelector.Element = selector.name;
            return templateSelector;
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdBuildSession(call) {
        try {
            let session = new App.Models.Session();
            session.Credential = call.request.credential;
            return session;
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdBuildParams() {
        try {
            let params = new App.Models.Params();
            return params;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateGrpcRequest(grpcRequest) {
        try {
            if (!grpcRequest instanceof App.Models.Request.GrpcRenderRequest) {
                throw new App.Errors.WrongType({ error: new Error() })
            }
        }
        catch (erro) {
            throw erro;
        }
    }
}