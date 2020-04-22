var App = require("../../../Application")

module.exports = class ServiceConfiguration {
    keepCase = true
    longs = String
    enums = String
    defaults = true
    oneofs = true
    // app
    ProtoPath = App.RootPath + "/gRPC/Server/PROTO/service.proto"
    PackageName = "ViewPackage"
    ServiceName = "View"
}