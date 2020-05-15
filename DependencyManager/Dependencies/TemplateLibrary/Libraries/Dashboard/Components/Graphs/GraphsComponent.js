var DashboardComponent = require("../DashboardComponent");
var path = require("path");

module.exports = class GraphsComponent extends DashboardComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Components/Graphs/graphs.html")
}