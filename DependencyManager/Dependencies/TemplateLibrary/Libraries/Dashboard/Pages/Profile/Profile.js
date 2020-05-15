var DashboardPage = require("../DashboardPage");
var path = require("path");

module.exports = class ProfilePage extends DashboardPage {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Dashboard/Pages/Profile/profile.html");
}