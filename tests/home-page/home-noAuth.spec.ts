import { test, expect } from '@playwright/test';
import HomePage from '../../pages/home-page';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    //await page.goto('https://practicesoftwaretesting.com/');
    homePage = new HomePage(page);
    await homePage.goto();
});

test.describe('Home page without authentication', () => {
   
    test("Validate sign in", async ({ page }) => {
            await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');
    });

    test("Validate title", async ({ page }) => {
        await expect(page.getByTitle('Practice Software Testing - Toolshop - v5.0')).toBeVisible();
    });

    test("Validate product grid", async ({ page }) => {
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(9);
        //value alternative
        //expect(await productGrid.getByRole('link').count()).toBe(9);
    });

    test("Validate search", async ({ page }) => {
        await page.getByPlaceholder('Search for products').fill('Thor Hammer');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(1);
    });

});