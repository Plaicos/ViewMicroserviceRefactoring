var DashboardComponent = require("../DashboardComponent");
var path = require("path");

module.exports = class HeaderComponent extends DashboardComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Components/Header/vheader.html")
}