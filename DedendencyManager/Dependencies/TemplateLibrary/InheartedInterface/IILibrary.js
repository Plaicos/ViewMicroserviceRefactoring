module.exports = class IILibrary {
    static Name;
    static Components;
    static Pages;

    static Initialize() {
        let Name = this.Name;
        let path = require("../Libraries/path")
        if (!Name) {
            throw Error("Cant Initialize Library without Name property!")
        }
        this.Components = require(`${path}/${this.Name}/Components/${this.Name}Components.js`);
        this.Pages = require(`${path}/${this.Name}/Pages/${this.Name}Pages`);
    }
}