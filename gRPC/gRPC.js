var gRPCServerBuilder = require("./Server/Server/ServerBuilder")
var gRPCServiceBuilder = require("./Server/Service/ServiceBuilder")
var gRPCServiceImplementation = require("./Server/ServiceImplementation/ServiceImplementation")

module.exports = class gRPC {

    static GrpcServer;

    static GrpcService;

    static ServiceImplementation;

    static GrpcClient;

    static InitializeStaticProps() {
        this.GrpcService = gRPCServiceBuilder.BuildService();
        this.ServiceImplementation = new gRPCServiceImplementation()
        this.GrpcServer = gRPCServerBuilder.BuildServer(this.GrpcService, this.ServiceImplementation);
    }

    static StartServer() {
        this.GrpcServer.start();
        console.log("gRPC Server Started")
    }

    static ExportClient() {
        //
    }
}