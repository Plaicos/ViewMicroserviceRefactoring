// TODO create a Util kind of thing
var IIDependency = require("../../InhertedInterface/Dependency")
var base64 = require("nodejs-base64")

module.exports = class Base64 extends IIDependency {
    static AsyncInitMustBeCalled = false;

    Encode(string) {
        try {
            return base64.base64encode(string);
        }
        catch (erro) {
            throw erro;
        }
    }

    Decode(string) {
        try {
            return base64.base64decode(string);
        }
        catch (erro) {
            throw erro;
        }
    }
}