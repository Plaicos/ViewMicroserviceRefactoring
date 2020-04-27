var App = require("../../../Application")
var Navigation = require("./Navigation/SessionNavigation")

module.exports = class Session {
    Navigation;
    Credential;
    constructor() {
        this.Navigation = new Navigation();
        return;
    }
    ToBase64() {
        try {
            return App.Dependencies.Base64.Encode(JSON.stringify(this));
        }
        catch (erro) {
            throw erro;
        }
    }
}