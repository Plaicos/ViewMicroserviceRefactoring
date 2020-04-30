var PublicPage = require("./PublicPage")

module.exports = class HomePage extends PublicPage {
    static TemplateFile = this.TemplatesPastePath + "\\Public\\Pages\\Home\\home.html";
}