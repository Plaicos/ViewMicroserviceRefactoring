var IIDependency = require("../../InhertedInterface/Dependency");


module.exports = class TemplateLibrary extends IIDependency {
    static AsyncInitMustBeCalled = true;
    static TemplateLibraries;
    static LibraryMapper = require("./LibraryMapper/LibraryMapper")
    static Models = require("./Models/Models")

    static InitializeAsync() {
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
            let a = {
                Library: "Public",
                Subject: "Pages",
                Name: "Home"
            }
            TemplateLibrary.PvdValidateSelector(selector);
            return
        }
        catch (erro) {
            throw erro;
        }
    }

    async RenderWithData(data)
}