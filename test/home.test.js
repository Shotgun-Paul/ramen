{ describe, it, after, before } require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var page;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { Options } = require('selenium-webdriver/chrome');
var should = chai.should();
chai.use(chaiAsPromised);

// kolhoz
var productId_1 = '1600412736308'; // Рамен с курицей в кисло-сладком соусе
var productId_2 = '1600672755644'; // Рамен c говядиной в соево-пряном соусе
var productId_3 = '1601916310521'; // Крылышки
var productId_4 = '1600412331036'; // Рамен классический с яйцом и луком

// var selector = require('../utils/locators');

// Here comes the Mocha

describe('Home page scenarios', function () {
    this.timeout(100000);

    this.beforeAll(async function (){
        page = new Page();
    })

    this.afterAll(async function (){
        // await page.quit();
    })

    beforeEach(async function () {
        page.visit('https://lfbw.ru/');
        await page.driver;
    });

    afterEach(async function () {
        // await page.driver.sleep(3000);
    });

    it('Adding items to cart', async function () {
        var result;

        await page.addItemToCart(productId_1);
        await page.addItemToCart(productId_2);
        result = await page.addItemToCart(productId_3); //is it kolhoz?

        // result.should.equal('3');
    });

    it('Check order', async function () {
        var expectedResult = ['Рамен с курицей в кисло-сладком соусе', 'Рамен c говядиной в соево-пряном соусе', 'Крылышки']; // kolhoz
        var actualResult = await page.checkOrderList();
        // var orderSum = await page.checkSum();

        // if (orderSum < 700) {
        //     throw new Error(`You should order something else, buddy. \n 
        //     Min order sum is 700 rub, but you got only ${orderSum} rub.`);
        // }

        // JSON.stringify(actualResult).should.equal(JSON.stringify(expectedResult));
    });

    it('Submit form', async function () {
        await page.submitForm();

        // NO TEST
    });

});