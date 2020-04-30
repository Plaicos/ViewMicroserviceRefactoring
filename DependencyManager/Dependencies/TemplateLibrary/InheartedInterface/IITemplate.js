var App = require("../../../../Application");
var fs = require("fs");

module.exports = class IITemplate extends App.Models.Template {
    static TemplatesPastePath = require("../Templates/path");
    static TemplateFile;
    static Render(data) {
        try {
            return fs.readFileSync(this.TemplateFile);
        }
        catch (erro) {
            throw erro;
        }
    }
}