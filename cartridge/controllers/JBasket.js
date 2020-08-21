
var ISML = require('dw/template/ISML');/* get ISML object from dw.template package */
var guard = require('storefront_controllers/cartridge/scripts/guard');
var BasketMgr = require('dw/order/BasketMgr'); /* get BasketMgr from dw.order package */


function start() {
var basket=BasketMgr.currentBasket;
/*use ISML to display basket on Basket. The rendered ISML should be
showBasket.isml (Use the quickcard section “Giving control to ISML” for
help*/
ISML.renderTemplate(
		'showBasket.isml',  
		{
		Basket:basket
		} 
		);
}
exports.Start = guard.ensure(['get'], start);