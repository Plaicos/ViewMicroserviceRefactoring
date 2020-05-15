var DashboardComponent = require("../DashboardComponent");
var path = require("path");

module.exports = class MessangerComponent extends DashboardComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Components/Messanger/messanger.html")
}