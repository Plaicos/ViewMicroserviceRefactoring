var App = require("../../Application")

module.exports = async (selector) => {
    try {
        let librarySelector = App.Adapters.TemplateSelector.ToTemplateLibrarySelector(selector)
        return App.Dependencies.TemplateLibrary.GetTemplate(librarySelector);
    }
    catch (erro) {
        throw erro;
    }
}