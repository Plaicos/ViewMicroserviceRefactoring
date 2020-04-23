module.exports = class IITemplate {
    static MarkoTemplate;
    static Render(data) {
        try {
            return this.MarkoTemplate.renderToString(data);
        }
        catch (erro) {
            throw erro;
        }
    }
}