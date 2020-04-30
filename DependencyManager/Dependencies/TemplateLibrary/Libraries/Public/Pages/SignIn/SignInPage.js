var PublicPage = require("../PublicPage")

module.exports = class SignInPage extends PublicPage {
    static TemplateFile = this.TemplatesPastePath + "\\Public\\Pages\\SignIn\\sign-in.html";
}