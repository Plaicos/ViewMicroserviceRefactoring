var DashboardPage = require("../DashboardPage");
var path = require("path");

module.exports = class SupplierDashboardPage extends DashboardPage {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Pages/Dashboard/supplier-dashboard.html");
}