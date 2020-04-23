var App = require("../../Application")

module.exports = class UseCaseOperator {
   //Complex multiple use case operations
   static RenderWithData(selector, data) {
      try {
         let template = App.UseCases.GetTemplate(selector);
         
      }
      catch (erro) {
         throw erro;
      }
   }
}