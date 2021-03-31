{ describe, it, after, before } require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var page;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { Options } = require('selenium-webdriver/chrome');
var should = chai.should();
chai.use(chaiAsPromised);

var products = require('../utils/products');
var orderList = [
    products.product_1,
    products.product_2,
    products.product_3,
    // products.product_4
];

// Here comes the Mocha

describe('"Little flower big window" scenarios', function () {
    this.timeout(100000);

    this.beforeAll(async function (){
        page = new Page();
    })

    this.afterAll(async function (){
        // await page.driver.sleep(3000);
        await page.quit();
    })

    beforeEach(async function () {
        page.visit('https://lfbw.ru/');
        await page.driver;
    });

    afterEach(async function () {
        // await page.driver.sleep(3000);
    });

    it('Add items to cart', async function () {
        var result;
        for (let i = 0; i < orderList.length; i++) {
            result = await page.addItemToCart(orderList[i].id)
        }
        result.should.equal(orderList.length);
    });

    it('Check order', async function () {
        var expectedResult = orderList;
        var actualResult = await page.checkOrderList();
        var orderSum = await page.checkSum();

        if (orderSum < 700) {
            throw new Error(`You should order something else, buddy. \r 
            Min order sum for your location is 700 rub, but you got only ${orderSum} rub in cart.`);
        }

        for (let i = 0; i < actualResult.length; i++) {
            JSON.stringify(actualResult[i]).should.equal(JSON.stringify(expectedResult[i].info));
        }
    });

    it('Submit form', async function () {
        await page.submitForm();
        // NO TEST
    });

});