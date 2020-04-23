var App = require("../../Application")

module.exports = async (selector) => {
    try {
        let selector = App.Converters.TemplateSelector.ToTemplateLibrarySelector(selector);
        return App.Dependencies.TemplateLibrary.GetTemplate(selector);
    }
    catch (erro) {
        throw erro;
    }
}