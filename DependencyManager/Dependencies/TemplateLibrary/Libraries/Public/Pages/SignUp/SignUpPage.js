var PublicPage = require("../PublicPage");
var path = require("path");

module.exports = class SignUpPage extends PublicPage {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Public/Pages/SignUp/sign-up.html");
}