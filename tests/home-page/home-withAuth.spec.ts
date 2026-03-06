import { test, expect } from '@playwright/test';
import HomePage from '@pages/home.page';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    homePage = new HomePage(page);
});

test.describe('Home page with authentication', () => {
    test.use({ storageState: '.auth/customer1.json' });

    test("Check that customer is signed in", async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();
        await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
    });
});