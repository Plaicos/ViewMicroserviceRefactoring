module.exports = class IIPage {
    IsProtected = false;
    MarkoTemplate;

    Render(data) {
        try {
            return this.MarkoTemplate.renderSync(data);
        }
        catch (erro) {
            throw erro;
        }
    }
}