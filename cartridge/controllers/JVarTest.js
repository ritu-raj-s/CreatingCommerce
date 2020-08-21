var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
ISML.renderTemplate(
'vartest.isml',
{

}
);
};
exports.Start = guard.ensure(['get'], start);