var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	var myParam =request.httpParameterMap.param.stringValue;

		/* Use the quickcard section “Dealing with query parameters” get the
		Parameter named param */
		if (myParam != null)
		{
			/* Use the quickcard section “Giving control to ISML” to give control
			to call/jnotEmpty.isml
			and loading myParam on a variable paramOnPdict
			*/			
			
			ISML.renderTemplate(
					'call/jnotEmpty.isml', 
					{
					paramOnPdict : myParam
					}
					);
	
		}
		else{
		ISML.renderTemplate(
		'call/jEmpty.isml',
		{
		paramOnPdict:'param not found'
		}
		);
		};
};
exports.Start = guard.ensure(['get'], start);