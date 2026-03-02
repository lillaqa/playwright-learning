import { test, expect } from '@playwright/test';

test.describe('Sorting products', () => {});

test.describe('Filtering products category', () => {});

test.describe('Filtering products price', () => {});

test.describe('Searching products', () => {});

test.describe('Pagination', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    test('Check that pagination is visible', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Previous' })).toHaveText('«');
        await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Next' })).toHaveText('»');
    });
});