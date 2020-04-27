var PublicComponent = require("./PublicComponent")

module.exports = class HeaderComponent extends PublicComponent {
    static MarkoTemplate = require("../../../Templates/Public/Components/Header/PublicHeader.marko");
}