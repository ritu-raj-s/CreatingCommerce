/**
 * Handles the simple form rendered by the SFRAForm.js controller.
 * 
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');


server.post('Show', server.middleware.http,
  function(req, res, next) {

  var nickname = req.form.nickname;

  res.render('myFormResult', {
    nickname : nickname});
   next();
  });

module.exports = server.exports();