var App = require("../../../../Application")
var Navigation = require("./Navigation/SessionNavigation")
var Authentication = require("./Authentication/SessionAuthentication")

module.exports = class Session {
    Navigation;
    Auhtentication;
    constructor() {
        this.Navigation = new Navigation();
        this.Auhtentication = Authentication.DefaultUnathenticated();
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