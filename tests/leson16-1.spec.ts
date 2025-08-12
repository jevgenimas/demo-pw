import {expect, Locator, test} from "@playwright/test";
import { faker } from "@faker-js/faker/locale/ar";
import * as dotenv from 'dotenv';
dotenv.config();

const randomUsername = faker.internet.username();
const randomPassword = faker.internet.password();

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL!);
});

test('Sign in button is disabled', async ({ page }) => {
    const loginButton: Locator = page.getByRole('button', { name: 'Sign in' });
    const userName:Locator = page.locator('#username');
    const password:Locator = page.locator('#password');
    await userName.fill('testtest');
    await password.fill('test');
    await expect(loginButton).toBeDisabled();
});

test('Sing in button is enabled' , async ({ page }) => {
    const loginButton:Locator = page.getByRole('button', { name: 'Sign in' });
    const userName:Locator = page.locator("#username");
    const password:Locator = page.locator("#password");
    await userName.fill(randomUsername);
    await password.fill(randomPassword);
    await expect(loginButton).toBeEnabled();
});