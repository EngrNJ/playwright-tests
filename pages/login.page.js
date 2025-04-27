import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.logo = '.orangehrm-login-branding',
        this.pageHeading = '//h5[contains(@class,"login-title")]',
        this.usernameLabel = '//label[text()="Username"]' 
        this.usernameInputField = 'input[name="username"]',
        this.passwordLabel = '//label[text()="Password"]'
        this.passwordInputField = 'input[name="password"]',
        this.forgotPasswordLink = '//p[contains(@class, "forgot-header")]',
        this.loginBtn = '//button[contains(@class, "login-button")]',
        this.sidePanelDashboard = '.oxd-sidepanel',
        this.dashboardTitle = '//h6[text()="Dashboard"]'
    }


async validateLoginPage() {
    await expect(this.page.locator(this.logo), 'Logo is not visible on the page').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.pageHeading), 'Heading is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.usernameLabel), 'Username label is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.usernameInputField), 'Username input field is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.passwordLabel), 'Password label is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.passwordInputField), 'Password input field is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.loginBtn), 'Login button is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.forgotPasswordLink), 'Forgot password link is not visible').toBeVisible({ timeout: 20000 });
}    

async login(username, password, verificationValue) {
    await this.page.locator(this.usernameInputField).fill(username);
    await this.page.locator(this.passwordInputField).fill(password);
    await this.page.locator(this.loginBtn).click();
    await this.page.waitForURL(verificationValue);
    await expect(this.page.locator(this.dashboardTitle), 'Dashbaord title is not visible').toBeVisible({ timeout: 20000 });
    await expect(this.page.locator(this.sidePanelDashboard), 'Side panel is not visible').toBeVisible({ timeout: 20000 });
}

}