var DependencyManager = require("./DedendencyManager/DependencyManager");

module.exports = class Application {
    static Dependencies;

    static States;

    static Entities = require("./App/Entities/Entities");

    static RootPath = __dirname;

    static Events = require("./App/Events/Events");

    static Models = require("./App/Models/Models");

    static Errors = require("./App/Errors/Errors");

    static Converters;

    static UseCases;

    static async Initialize() {
        //The order matters
        Application.Dependencies = await DependencyManager.InitializeAndExportAsync();

        Application.Converters = require("./App/Converters/Converteres");
        Application.UseCases = require("./App/UseCases/UseCases");
    }
}