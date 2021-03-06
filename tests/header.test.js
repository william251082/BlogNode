const Page =require('./helpers/page');

let page;

beforeEach(async () => {
    page = await Page.build();
    await  page.goto('localhost:3000');
});

afterEach(async () => {
    await page.close();
});

test('Adds two numbers', () => {
   const sum = 1 + 2;

   expect(sum).toEqual(3);

});

test('The header has the correct test', async () => {
    const text = await page.getContentsOf('a.brand-logo');

    expect(text).toEqual('Blogster');
});

test('Clicking login starts oauth flow', async () => {
    await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
    await page.login();

    const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

    expect(text).toEqual('Logout');
});