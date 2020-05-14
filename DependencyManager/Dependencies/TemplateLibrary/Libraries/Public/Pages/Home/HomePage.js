var PublicPage = require("../PublicPage");
var path = require("path");

module.exports = class HomePage extends PublicPage {
    static TemplateFile = path.resolve(this.TemplatesPastePath + `/Public/Pages/Home/home.html`);
}