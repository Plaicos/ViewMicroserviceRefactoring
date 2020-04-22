var DependencyManager = require("./DedendencyManager/DependencyManager");

module.exports = class Application {
    static Dependencies;

    static States;

    static Entities = require("./App/Entities/Entities");

    static UseCases = require("./App/UseCases/UseCases");

    static RootPath = __dirname;

    static Events = require("./App/Events/Events");

    static Models = require("./App/Models/Models");

    static Errors = require("./App/Errors/Errors")

    static Adapters = require("./App/Adapters/Adapters")

    static async Initialize() {
        //Run this before using any dependency managed by the DependencyManager
        Application.Dependencies = await DependencyManager.InitializeAndExportAsync();
        Application.Events.InitializeStaticProps();
    }
}