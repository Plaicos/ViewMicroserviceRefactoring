var App = require("../../Application")

module.exports = async (session, config) => {
    if (!session instanceof App.Models.States.Session) {
        throw Error("Instance of Session Expected!");
    }

    try {
        await SCI.Auth.CheckCredentialClearance(config, session.Authentication.Credential)
        return;
    }
    catch (erro) {
        throw erro;
    }
}