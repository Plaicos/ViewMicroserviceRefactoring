var IILibrary = require("../InheartedInterface/IILibrary")

module.exports = class PublicLibrary extends IILibrary {
    static Name = "Public"
    static Components = require("./Public/Components/PublicComponents")
}