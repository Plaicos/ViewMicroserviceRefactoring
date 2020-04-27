var App = require("../../Application")

module.exports = class UseCaseOperator {
   //Complex multiple use case operations
   static async RenderWithData(selector, renderData) {
      try {
         let template = await App.UseCases.GetTemplate(selector);
         let templateRenderOutput = await App.UseCases.RenderTemplate(template, renderData);
         return templateRenderOutput;
      }
      catch (erro) {
         throw erro;
      }
   }
}