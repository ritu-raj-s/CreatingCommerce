/**
 * A simple form controller.
 *
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get(
 'Start', server.middleware.http, function (req, res, next) {
    var actionUrl = URLUtils.url('MyFormResult-Show'); //sets the route to call for the form submit action
 var SFRAhelloform = server.forms.getForm('myForm'); //creates empty JSON object using the form definition
 SFRAhelloform.clear();

   res.render('myFormTemplate', {
       actionUrl: actionUrl,
       SFRAhelloform: SFRAhelloform
   });
 next();
});

module.exports = server.exports();