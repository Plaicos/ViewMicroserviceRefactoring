var PublicComponent = require("../PublicComponent")
var path = require("path");

module.exports = class HeaderComponent extends PublicComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Public/Components/Header/publicHeader.html");
}
