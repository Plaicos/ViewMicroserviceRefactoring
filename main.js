var App = require("./Application");
var gRPC = require("./gRPC/gRPC")

async function Execute(){
    await App.Initialize();

    gRPC.InitializeStaticProps();
    gRPC.StartServer();
}

Execute();