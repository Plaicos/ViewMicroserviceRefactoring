var DashboardComponent = require("../DashboardComponent");
var path = require("path");

module.exports = class ProfileComponent extends DashboardComponent {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Components/Profile/profile.html")
}