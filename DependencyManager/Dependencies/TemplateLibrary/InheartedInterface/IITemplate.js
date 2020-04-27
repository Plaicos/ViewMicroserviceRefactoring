var App = require("../../../../Application")

module.exports = class IITemplate extends App.Models.Template {
    static MarkoTemplate;
    static Render(data) {
        try {
            return this.MarkoTemplate.renderSync(data);
        }
        catch (erro) {
            throw erro;
        }
    }
}