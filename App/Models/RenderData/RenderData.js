var Session = require("./Session/Session")
var Params = require("./Params/Params")

module.exports = class RenderData {
    Session;
    Params;
    constructor() {
        this.Session = new Session();
        this.Params = new Params();
    }
}