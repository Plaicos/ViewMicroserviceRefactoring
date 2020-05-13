var PublicPage = require("./PublicPage");
var separator = process.env.pathSeparator;

module.exports = class HomePage extends PublicPage {
    static TemplateFile = this.TemplatesPastePath + `${this.PathSeparator}Public${separator}Pages${separator}Home${separator}home.html`;
}