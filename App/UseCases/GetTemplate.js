var App = require("../../Application")

module.exports = async (selector) => {
    try {
        return App.Dependencies.TemplateLibrary.GetTemplate(selector);
    }
    catch (erro) {
        throw erro;
    }
}