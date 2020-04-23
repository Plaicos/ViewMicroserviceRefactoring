var App = require("../../Application")

module.exports = class UseCaseOperator {
   //Complex multiple use case operations
   static RenderWithData(selector, renderData) {
      try {
         let template = App.UseCases.GetTemplate(selector);
         let templateRenderOutput = App.UseCases.RenderTemplate(template, renderData);
         return templateRenderOutput;
      }
      catch (erro) {
         throw erro;
      }
   }
}