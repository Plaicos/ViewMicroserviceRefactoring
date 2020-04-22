var App = require("../../Application")

module.exports = class TemplateSelectorAdapter {
    static PvdValidateSelector(selector) {
        try {
            if (!selector instanceof App.Models.Request.TemplateSelector()) {
                let stack = Error().stack
                let message = "GetTemplate() Wrong Input Type"
                throw Error(new App.Errors.WrongType({ stack, message }))
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdConvertToLibrarySelector(selector) {
        try {
            let librarySelector = new App.Dependencies.TemplateLibrary.Models.Selector();
            librarySelector.Library = selector.Library;
            librarySelector.Subject = selector.Subject;
            librarySelector.Element = selector.Name;
            return librarySelector;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToTemplateLibrarySelector(selector) {
        try {
            this.PvdValidateSelector(selector);
            return this.PvdConvertToLibrarySelector(selector);
        }
        catch (erro) {
            throw erro;
        }
    }
}