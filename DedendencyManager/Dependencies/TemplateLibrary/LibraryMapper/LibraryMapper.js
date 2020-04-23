var fs = require("fs");
var IILibrary = require("../InheartedInterface/IILibrary")

module.exports = class LibrariesMapper {
    static PvdLibs = new Array();
    static PvdPath = require("../Libraries/path")
    static PvdBlacklist = ["path.js"]

    static MapLibraries() {
        try {
            let files = fs.readdirSync(this.PvdPath)

            for (let file of files) {
                let isJsFile = this.PvdIsJsFile(file)
                let path = `${this.PvdPath}/${file}`
                
                if (isJsFile) {
                    file = this.PvdReadLibrary(path);
                    let isLibrary = file.prototype instanceof IILibrary;

                    if (isLibrary) {
                        this.PvdPush(file);
                    }
                }
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ExportLibraries(){
        return this.PvdLibs;
    }

    static PvdIsJsFile(path) {
        try {
            let termination = path.substring(path.length - 3)
            return termination === ".js";
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdReadLibrary(path) {
        try {
            return require(path);
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdPush(library) {
        try {
            this.PvdLibs.push(library)
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}