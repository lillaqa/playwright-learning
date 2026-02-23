import { test, expect } from '@playwright/test';

test("Home page", async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page.getByTitle('Practice Software Testing - Toolshop - v5.0')).toBeVisible();
    await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');

    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole('link')).toHaveCount(9);
    //value alternative
    expect(await productGrid.getByRole('link').count()).toBe(9);

    //challenge: search for thor hammer (action), check the result in the grid (assertion)
    await page.getByPlaceholder('Search for products').fill('Thor Hammer');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(productGrid.getByRole('link')).toHaveCount(1);
})