import { test, expect } from "@playwright/test";
const loginPageObj = require('../pages/login.page');

test('Validate login functionality @login', async ({ browser }) => {

    test.setTimeout(120000);

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/', { waitUntil: 'domcontentloaded'});
    const loginPage = new loginPageObj.LoginPage(page);
    await loginPage.validateLoginPage();
    await loginPage.login('Admin', 'admin123', '/\dashboard/index')
})