var App = require("../../../Application")
var IIDependency = require("../../InhertedInterface/Dependency");

module.exports = class TemplateLibrary extends IIDependency {
    static AsyncInitMustBeCalled = true;
    static TemplateLibraries;
    static LibraryMapper = require("./LibraryMapper/LibraryMapper")

    static async InitializeAsync() {
        try {
            this.PvdMapLibraries();
            this.PvdInitializeLibraries();
            this.PvdBuildAndSetLibraries();
            return
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdMapLibraries() {
        try {
            this.LibraryMapper.MapLibraries();
            this.TemplateLibraries = this.LibraryMapper.ExportLibraries();
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdBuildAndSetLibraries() {
        var libraries = new Object();
        try {
            for (let library of this.TemplateLibraries) {
                libraries[`${library.Name}`] = library
            }
            this.TemplateLibraries = libraries;
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdInitializeLibraries() {
        this
        try {
            for (let library of this.TemplateLibraries) {
                library.Initialize();
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdValidateSelector(selector) {
        try {
            if (!selector instanceof App.Models.TemplateSelector) {
                throw Error("Library find selector must be a valid selector object");
            }
            
            if (!this.TemplateLibraries[selector.Library]) {
                throw Error(`Library '${selector.Library}' does not exist`);
            }
            if (!this.TemplateLibraries[selector.Library][selector.Subject]) {
                throw Error(`Subject '${selector.Subject}' does not exist`);
            }
            if (!this.TemplateLibraries[selector.Library][selector.Subject][selector.Element]) {
                throw Error(`Element '${selector.Element}' does not exist`);
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    TemplateLibraries = TemplateLibrary.TemplateLibraries;

    constructor() {
        super()
        this.GetTemplate = this.GetTemplate;
    }

    async GetTemplate(selector) {
        try {
            TemplateLibrary.PvdValidateSelector(selector);
            return TemplateLibrary.TemplateLibraries[selector.Library][selector.Subject][selector.Element];
        }
        catch (erro) {
            throw erro;
        }
    }
}