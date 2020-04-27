module.exports = class Models {
    static Request = require("./Request/RequestModels");
    static Response = require("./Response/ResponseModels");
    static Template = require("./Template/TemplateModel");
    static TemplateSelector = require("./TemplateSelector/TemplateSelector");
    static Session = require("./Session/Session")
    static Credential = require("./Credential/Credential")
    static Params = require("./Params/Params")
    static RenderData = require("./RenderData/RenderData");
    static RenderOutput = require("./RenderOutput/TemplateRenderOutput")
}