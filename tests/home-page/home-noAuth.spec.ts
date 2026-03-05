import { test, expect } from '@playwright/test';
import HomePage from '../../pages/home-page';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    //await page.goto('https://practicesoftwaretesting.com/');
    homePage = new HomePage(page);
    await homePage.goto();
});

test.describe('Home page without authentication', () => {
   

    test("visual test no auth", async ({ page }) => {
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveScreenshot('home-page-no-auth.png', {
            mask: [page.getByTitle("Practice Software Testing - Toolshop")],
        });

    });
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

test.describe('API practice tests', () => {
    test('Validate product data is visible on UI from API', async ({ page }) => {
        let products: any;
        await test.step('intercept /products', async () => {
            await page.route('https://api.practicesoftwaretesting.com/products**', async (route) => {
                const response = await route.fetch();
                products = await response.json();
                route.continue();
            });
        });
        await page.goto('/');
        //the test was too fast, so this is slowing it down
        await expect(page.locator('skeleton').first()).not.toBeVisible();
        for (const product of products.data) {
            await expect(homePage.productGrid).toContainText(product.name);
            await expect(homePage.productGrid).toContainText(product.price.toString());
        }
        //await expect(homePage.productGrid).toContainText("Hammer");
    });
});