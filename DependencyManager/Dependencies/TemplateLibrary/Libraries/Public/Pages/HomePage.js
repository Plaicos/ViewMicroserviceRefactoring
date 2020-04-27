var PublicPage = require("./PublicPage")

module.exports = class HomePage extends PublicPage {
    static MarkoTemplate = require("../../../Templates/Public/Pages/Home/Home.marko");
}