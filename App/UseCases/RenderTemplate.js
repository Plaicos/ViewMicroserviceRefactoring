var App = require("../../Application")

module.exports = async (template, renderData) => {
    try {
        let viewString = App.Dependencies.TemplateEngine.RenderWithData(template, renderData);
        let renderOutput = new App.Models.RenderOutput(viewString);
        return renderOutput;
    }
    catch (erro) {
        throw erro;
    }
}