const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    await  page.goto('localhost:3000');
});

afterEach(async () => {
    await browser.close();
});

test('Adds two numbers', () => {
   const sum = 1 + 2;

   expect(sum).toEqual(3);

});

test('The header has the correct test', async () => {
    const text = await page.$eval('a.brand-logo', el => el.innerHTML);

    expect(text).toEqual('Blogster');
});

test('Clicking login starts oauth flow', async () => {
    await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
    const id = '5acc9d2efd7888634168aed5';

    const Buffer = require('safe-buffer').Buffer;
    const sessionObject = {
        passport: {
            user: id
        }
    };
    const sessionString = Buffer.from(
        JSON.stringify(sessionObject)
    ).toString('base64');

    const Keygrip = require('keygrip');
    const keys = require('../config/keys');
    const keygrip = new Keygrip([keys.cookieKey]);
    const sig = keygrip.sign('session=' + sessionString);

    console.log(sessionString, sig);
    });