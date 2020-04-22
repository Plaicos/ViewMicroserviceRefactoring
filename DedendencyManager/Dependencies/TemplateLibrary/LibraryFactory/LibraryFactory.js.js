module.exports = class LibraryFactory {
    static Execute(librariesMap) {
        try {
            let libraries = new Object();
            for (let lib of librariesMap) {
                libraries[`${lib.Name}`] = lib;
            }
            return libraries;
        }
        catch (erro) {
            throw erro;
        }
    }
}