var formSelector = 'form#form229858769.t-form.js-form-proccess.t-form_inputs-total_7:nth-child(1) > div.t-form__inputsbox:nth-child(5)';

module.exports = {
    addToCartButton: 'div > div.t754__col_right.t754__wrapper.t-col.t-col_6.t-align_left > div.t754__btn-wrapper > a',
    cartionCounter: 'div.t706__carticon-counter',
    cartIcon: 'div.t706__carticon.t706__carticon_showed > div.t706__carticon-wrapper > div.t706__carticon-imgwrap > div',
    itemDescription: 'div.t706__product-title.t-descr.t-descr_sm > a',
    orderPrice: 'span.t706__cartwin-prodamount',

    nameInput: `${formSelector} > div.t-input-group.t-input-group_nm:nth-child(1) > div.t-input-block:nth-child(2) > input.t-input.js-tilda-rule:nth-child(1)`,
    telInput: `${formSelector} > div.t-input-group.t-input-group_ph:nth-child(2) > div.t-input-block:nth-child(2) > input.t-input.js-tilda-rule:nth-child(1)`,
    addressInput: `${formSelector} > div.t-input-group.t-input-group_ta:nth-child(3) > div.t-input-block:nth-child(2) > textarea.t-input.js-tilda-rule:nth-child(1)`,
    wishesInput: `${formSelector} > div.t-input-group.t-input-group_in:nth-child(4) > div.t-input-block:nth-child(3) > input.t-input.js-tilda-rule:nth-child(1)`,
    callOrNotInput: '',
    paymentMethodInput: `${formSelector} > div.t-input-group.t-input-group_rd:nth-child(6) > div.t-input-block:nth-child(2) > div.t-radio__wrapper:nth-child(1) > label.t-radio__control.t-text.t-text_xs:nth-child(2) > div.t-radio__indicator:nth-child(2)`,
    promocodeInput: '',
    submitOrderButton: `${formSelector} > div.t-form__submit:nth-child(10) > button.t-submit`,
}