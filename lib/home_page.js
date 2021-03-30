const { it } = require('mocha');
var Page = require('./base_page');

// kolhoz
var cartionCounter = 'div.t706__carticon-counter';
var cartIcon = 'div.t706__carticon.t706__carticon_showed > div.t706__carticon-wrapper > div.t706__carticon-imgwrap > div';
var itemDescription = 'div.t706__product-title.t-descr.t-descr_sm > a';
var orderPrice = 'span.t706__cartwin-prodamount';
var formSelector = 'form#form229858769.t-form.js-form-proccess.t-form_inputs-total_7:nth-child(1) > div.t-form__inputsbox:nth-child(5)'

// kolhoz
var nameInput = `${formSelector} > div.t-input-group.t-input-group_nm:nth-child(1) > div.t-input-block:nth-child(2) > input.t-input.js-tilda-rule:nth-child(1)`;
var telInput = `${formSelector} > div.t-input-group.t-input-group_ph:nth-child(2) > div.t-input-block:nth-child(2) > input.t-input.js-tilda-rule:nth-child(1)`;
var addressInput = `${formSelector} > div.t-input-group.t-input-group_ta:nth-child(3) > div.t-input-block:nth-child(2) > textarea.t-input.js-tilda-rule:nth-child(1)`;
var wishesInput = `${formSelector} > div.t-input-group.t-input-group_in:nth-child(4) > div.t-input-block:nth-child(3) > input.t-input.js-tilda-rule:nth-child(1)`;
var callOrNotInput = '';
var paymentMethodInput = `${formSelector} > div.t-input-group.t-input-group_rd:nth-child(6) > div.t-input-block:nth-child(2) > div.t-radio__wrapper:nth-child(1) > label.t-radio__control.t-text.t-text_xs:nth-child(2) > div.t-radio__indicator:nth-child(2)`;
var promocodeInput = '';
var submitOrderButton = `${formSelector} > div.t-form__submit:nth-child(10) > button.t-submit`;

Page.prototype.addItemToCart = async function (productId) { 
    var item = await this.find(`[data-product-lid="${productId}"] > a.js-product-link`);
    await this.driver.sleep(1000); // kolhoz
    await item.click(); // kolhoz
    await this.find(`#t754__product-${productId} > div > div.t754__col_right.t754__wrapper.t-col.t-col_6.t-align_left > div.t754__btn-wrapper > a`).then((el) => el.click());

    return await this.find(cartionCounter).then((el) => el.getText());
}

Page.prototype.checkOrderList = async function () { 
    await this.find(cartIcon).then((el) => el.click());
    
    return await this.findAll(itemDescription).then(async function(elements){
        return Promise.all(elements.map(async function(el){
            return el.getAttribute("innerText");
        }));
    });
}

Page.prototype.checkSum = async function () { 
    var regExpPattern = /.\d./g;
    var priceText = await this.find(orderPrice).then((el) => el.getText());
    var orderSum = await priceText.match(regExpPattern)[0];
    
    return JSON.parse(orderSum);
}

Page.prototype.submitForm = async function () { 
    await this.find(cartIcon).then((el) => el.click());

    await this.write(nameInput, 'Павел');
    await this.write(telInput, '+79136384968');
    await this.write(addressInput, 'ул. С. Стальского, д. 12, кв. 168, 5 подъезд, 8 этаж');
    await this.write(wishesInput, 'Добавьте, пожалуйста, в каждый рамен столовую ложку соевого соуса и чайную ложку жареного чили. Крылышки с кисло-сладким соусом.');

    await this.find(paymentMethodInput).then((el) => el.click());
    // await this.find(submitOrderButton).then((el) => el.click()); // Submit Order
}

module.exports = Page;