import { test, expect } from '@playwright/test';

test.describe('Home page without authentication', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });
    test("Validate sign in", async ({ page }) => {
            await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');
    });

    test("Validate title", async ({ page }) => {
        await expect(page.getByTitle('Practice Software Testing - Toolshop - v5.0')).toBeVisible();
    });

    test("Validate product grid", async ({ page }) => {
        const productGrid = page.locator(".col-md-9");
        await expect(productGrid.getByRole('link')).toHaveCount(9);
        //value alternative
        //expect(await productGrid.getByRole('link').count()).toBe(9);
    });

    test("Validate search", async ({ page }) => {
        const productGrid = page.locator(".col-md-9");
        await page.getByPlaceholder('Search for products').fill('Thor Hammer');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(productGrid.getByRole('link')).toHaveCount(1);
    });

});

test.describe('Home page with authentication', () => {
    test.use({ storageState: '.auth/customer1.json' });
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    test("Check that customer is signed in", async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();
        await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
    });
});