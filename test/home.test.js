{ describe, it, after, before } require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var page;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { Options } = require('selenium-webdriver/chrome');
var should = chai.should();
chai.use(chaiAsPromised);

// Here comes the Mocha

describe('Home page scenarios', function () {
    // this.timeout(100000);

    this.beforeAll(async function (){
        page = new Page();
    })

    this.afterAll(async function (){
        await page.quit();
    })

    beforeEach(async function () {
        page.visit('https://lfbw.ru/');
        await page.driver;
    });

    afterEach(async function () {
        await page.driver.sleep(3000);
    });

    it('Test check', async function () {
        await driver.wait(until.elementLocated(By.css('[data-product-lid="1600412736308"] > a.js-product-link')), 15000);
        var ramen1 = await driver.findElement(By.css('[data-product-lid="1600412736308"] > a.js-product-link'));
        
        await page.driver.sleep(3000);
        await ramen1.click();

        console.log();
    });

});

// #t754__product-1600412736308 > div > div.t754__col_right.t754__wrapper.t-col.t-col_6.t-align_left > div.t754__btn-wrapper > a