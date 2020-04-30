var PublicComponent = require("./PublicComponent")

module.exports = class HeaderComponent extends PublicComponent {
    static TemplateFile = this.TemplatesPastePath + "\\Public\\Components\\Header\\publicHeader.html";
}
