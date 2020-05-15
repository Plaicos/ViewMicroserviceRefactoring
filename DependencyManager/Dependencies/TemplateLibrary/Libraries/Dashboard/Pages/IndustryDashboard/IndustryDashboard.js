var DashboardPage = require("../DashboardPage");
var path = require("path");

module.exports = class IndustryDashboardPage extends DashboardPage {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Pages/Dashboard/industry-dashboard.html");
}