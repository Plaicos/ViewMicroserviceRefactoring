module.exports = class SessionNavigation {
    CurrentPage;
    IsAuthenticated;
    DefaultPage = "Home"

    constructor(page = this.DefaultPage) {
        this.CurrentPage = page;
    }
    
    SetPage(page) {
        try {
            this.CurrentPage = page;
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}