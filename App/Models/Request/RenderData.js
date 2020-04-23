var Session = require("../States/Session/Session")

module.exports = class RenderData {
    Session;
    Params;
    constructor() {
        this.Session = new Session();
    }
}