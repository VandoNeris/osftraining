'use strict';

var base = module.superModule; 

function calculatePercentageOff(standardPrice, salePrice) {

    // Check if the product has a sale price

    var discountPercentage = ((standardPrice - salePrice) / standardPrice) * 100;

    return discountPercentage;
}

base.calculatePercentageOff = calculatePercentageOff;
module.exports = base;
