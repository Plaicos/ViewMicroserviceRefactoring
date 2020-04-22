var IIDependency = require("../../InhertedInterface/Dependency");


module.exports = class TemplateLibrary extends IIDependency {
    static AsyncInitMustBeCalled = true;
    static TemplateLibraries;
    static LibraryMapper = require("./LibraryMapper/LibraryMapper")
    static Models = require("./Models/Models")


    static InitializeAsync() {
        try {
            this.LibraryMapper.MapLibraries();
            this.TemplateLibraries = this.LibraryMapper.ExportLibraries();
            console.log(this.TemplateLibraries)
            return
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdValidateSelector(selector) {
        try {
            if (!selector instanceof this.Models.Selector) {
                return reject("Library find selector must be a valid selector object")
            }

            if (!selector.lib || !selector.subject || !selector.name) {
                return reject("Selector object is invalid")
            }

            if (!libs[selector.lib]) {
                return reject(`Library '${selector.lib}' does not exist`)
            }
            if (!libs[selector.lib][selector.subject]) {
                return reject(`Subject '${selector.subject}' does not exist`)
            }
            if (!libs[selector.lib][selector.subject][selector.name]) {
                return reject(`Element '${selector.name}' does not exist`)
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    async GetTemplate(selector) {
        try {
            TemplateLibrary.PvdValidateSelector(selector);
            
        }
        catch (erro) {
            throw erro;
        }
    }

}