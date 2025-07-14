import {expect, Locator, test} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
});

test('sign in button is disabled', async ({ page }) => {
    const loginButton: Locator = page.getByRole('button', { name: 'Sign in' });
    const userName:Locator = page.locator('#username');
    const password:Locator = page.locator('#password');
    await userName.fill('testtest');
    await password.fill('test');
    await expect(loginButton).toBeDisabled();
});