module.exports = class SessionAuthentication {
    static DefaultUnathenticated() {
        try {
            let auth = new SessionAuthentication();
            auth.Credential = null;
            auth.IsAuhtenticated = false;
            return auth;
        }
        catch (erro) {
            throw erro;
        }
    }

    IsAuhtenticated;
    Credential;
}