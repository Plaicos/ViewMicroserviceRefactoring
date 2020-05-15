var PublicPage = require("../PublicPage");
var path = require("path");

module.exports = class SignInPage extends PublicPage {
    static TemplateFile = path.normalize(this.TemplatesPastePath + "/Public/Pages/SignIn/sign-in.html");
}