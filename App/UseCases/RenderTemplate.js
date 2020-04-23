var App = require("../../Application")

module.exports = async (template, renderData) => {
    try {
        return App.Dependencies.TemplateEngine.RenderWithData(template, renderData);
    }
    catch (erro) {
        throw erro;
    }
}