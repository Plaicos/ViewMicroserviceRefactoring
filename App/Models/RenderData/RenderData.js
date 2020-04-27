var Session = require("../Session/Session")

module.exports = class RenderData {
    Session;
    Params;
    Templates;
    constructor() {
        this.Session = new Session();
        this.Params = null;
    }
}