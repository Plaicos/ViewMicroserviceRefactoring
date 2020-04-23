var App = require("../../../Application")
var IIDependency = require("../../InhertedInterface/Dependency");

module.exports = class TemplateEngine extends IIDependency {
    static AsyncInitMustBeCalled = true;
    static async InitializeAsync() {
        try {
            require("marko/node-require");
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
    static ValidateRenderData(renderData) {
        try {
            if (!renderData instanceof App.Models.RenderData) {
                throw new App.Errors.WrongType({ error: new Error });
            }
            /*if (!renderData.Params instanceof App.Models.RenderData.) {
                renderData.Params = App.Models.Request.Params.Empty();
            }*/
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
    RenderWithData(template, renderData) {
        try {
            TemplateEngine.ValidateRenderData(renderData);
            let html = template.Render(renderData);
            console.log(html);
            return html;
        }
        catch (erro) {
            throw erro;
        }
    }
}