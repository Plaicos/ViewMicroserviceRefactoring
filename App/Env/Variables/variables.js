// TODO make something decent to manage env variables

var os = require("os");
var pathSeparator;

if (os.platform() === "linux") {
    pathSeparator = "/";
}
else if (os.platform() === "win32") {
    pathSeparator = "\\\\";
}
else {
    pathSeparator = "\\\\";
}

module.exports = {
    currentOs: os.platform(),
    pathSeparator: pathSeparator
}