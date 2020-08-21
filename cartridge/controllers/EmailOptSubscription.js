'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get('Show', server.middleware.https, csrfProtection.generateToken, function (req, res, next) {
    var actionUrl = URLUtils.url('EmailOptSubscription-Handler');
    var emailOptForm = server.forms.getForm('emailOptForm');
    emailOptForm.clear();

    res.render('/emailopt/emailoptsignup', {
        actionUrl: actionUrl,
        emailOptForm: emailOptForm
    });

    next();
});

server.post('Handler', csrfProtection.validateAjaxRequest, server.middleware.https, function (req, res, next) {
    var emailOptForm = server.forms.getForm('emailOptForm');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');

    if (emailOptForm.valid) {
        this.on('route:BeforeComplete', function (req, res) {
            var Transaction = require('dw/system/Transaction');
            try {
                Transaction.wrap(function () {
                    var CO = CustomObjectMgr.createCustomObject('EmailOptor', emailOptForm.email.value);
                    CO.custom.name = emailOptForm.name.value;
                    CO.custom.country = emailOptForm.country.value;
                });

                res.json({
                    success: true,
                    msg: 'Record Inserted Successfully'
                });
            } catch (e) {
                var exp = e;
                if (exp.javaName == 'MetaDataException') {
                    res.json({
                        success: false,
                        error: 'Key Already Exists'
                    });
                } else {
                    res.json({
                        success: false,
                        error: 'Custom Object Definition Not Found'
                    });
                }
            }
        });
    } else {
        res.setStatusCode(500);
        res.json({
            success: false
        });
    }
    next();
});

module.exports = server.exports();
