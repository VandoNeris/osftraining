'use strict';

var server = require('server');
 
server.extend(module.superModule);

var productHelpers = require('*/cartridge/scripts/helpers/productHelpers');
 
server.append('Show', function (req, res, next) {
    var discountPercentage = null;
    var viewData = res.getViewData();
    discountPercentage = productHelpers.calculatePercentageOff(viewData.product.price.list.value, viewData.product.price.sales.value);
    viewData.product.discountPercentage = discountPercentage.toFixed(0);
    res.setViewData(viewData);

    next();
});

module.exports = server.exports();