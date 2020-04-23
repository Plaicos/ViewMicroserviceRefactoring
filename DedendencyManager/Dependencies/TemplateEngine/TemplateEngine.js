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
    RenderWithData() {
        
    }
}