(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment='form']";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  var $ = window.jQuery;
  formHandler.addSubmitHandler(function(data) {
    if (!data.title) {
      data.title = "";
    }
    $("#thankYouModal").text("Thank you for your payment " + data.title + " " + data.username + "!");
    $("#thankYouModal").modal();
  });
})(window);
