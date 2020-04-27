module.exports = class DependencyManager {

    static DependenciesList;

    static async InitializeAndExportAsync() {
        try {
            this.DependenciesList = require("./List/DependenciesList");
            await this.PvdInitializeDependencies();
            return this.PvdBuildDependencies();
        }
        catch (erro) {
            throw erro;
        }
    }

    static PvdBuildDependencies() {
        try {
            let dependencies = new Object();
            for (let dep of this.DependenciesList) {
                dependencies[`${dep.Name}`] = new dep.Implementation();
            }
            return dependencies;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async PvdInitializeDependencies() {
        try {
            for (let dep of this.DependenciesList) {
                if (dep.Implementation.AsyncInitMustBeCalled) {
                    await dep.Implementation.InitializeAsync();
                }
            }
        }
        catch (erro) {
            throw erro;
        }
    }
}