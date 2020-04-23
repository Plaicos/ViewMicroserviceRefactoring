var PublicPage = require("./PublicPage")

module.exports = class HomePage extends PublicPage {
    static MarkoTemplate = require("../../../Templates/Public/Pages/home_page.marko");
}