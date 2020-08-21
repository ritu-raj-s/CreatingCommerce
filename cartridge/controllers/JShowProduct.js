'use strict';
/** @module controllers/JShowProduct */
var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var ProductMgr = require('dw/catalog/ProductMgr');

function start() {
	var parameterId =request.httpParameterMap.pid.stringValue;
	var product = ProductMgr.getProduct(parameterId);

	var errorMsg=dw.web.Resource.msgf("productnotfoundMsg", 'myBundle', null,
			parameterId);
	if (product===null) {
		ISML.renderTemplate(
		'productnotfound.isml',
		{
		message:errorMsg
		}
		);
		}
		else{
		ISML.renderTemplate(
		'productfound.isml',
		{
		myProduct:product
		}
		);
		}
	
}
exports.Start = guard.ensure(['get'], start);