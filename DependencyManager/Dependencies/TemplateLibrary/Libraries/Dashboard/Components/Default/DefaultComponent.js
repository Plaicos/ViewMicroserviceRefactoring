var DashboardComponent = require("../DashboardComponent");
var path = require("path");

module.exports = class DefaultComponent extends DashboardComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Components/Default/default.html")
}