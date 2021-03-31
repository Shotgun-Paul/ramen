const { it } = require('mocha');
var Page = require('./base_page');
var sel = require('../utils/selectors');
var formData = require('../utils/formData');

Page.prototype.addItemToCart = async function (productId) { 
    var item = await this.find(`[data-product-lid="${productId}"] > a.js-product-link`);
    await this.driver.sleep(1000); // Bad practice
    await item.click(); // Bad practice
    await this.find(`#t754__product-${productId} > ${sel.addToCartButton}`).then((el) => el.click());

    return Number(await this.find(sel.cartionCounter).then((el) => el.getText()));
}

Page.prototype.checkOrderList = async function () { 
    await this.find(sel.cartIcon).then((el) => el.click());
    
    return await this.findAll(sel.itemDescription).then(async function(elements){
        return Promise.all(elements.map(async function(el){
            return el.getAttribute("innerText");
        }));
    });
}

Page.prototype.checkSum = async function () { 
    var regExpPattern = /.\d./g;
    var priceText = await this.find(sel.orderPrice).then((el) => el.getText());
    var orderSum = await priceText.match(regExpPattern)[0];
    
    return JSON.parse(orderSum);
}

Page.prototype.submitForm = async function () { 
    await this.find(sel.cartIcon).then((el) => el.click());

    // there are unhandled fields
    await this.write(sel.nameInput, formData.name);
    await this.write(sel.telInput, formData.tel);
    await this.write(sel.addressInput, formData.address);
    await this.write(sel.wishesInput, formData.wishes);

    await this.find(sel.paymentMethodInput).then((el) => el.click());
    // await this.find(sel.submitOrderButton).then((el) => el.click()); // Submit Order
}

module.exports = Page;