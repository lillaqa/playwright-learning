import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
});

test.describe('Sorting products', () => {});

test.describe('Filtering products category', () => {});

test.describe('Filtering products price', () => {});

test.describe('Searching products', () => {});

test.describe('Pagination', () => {

    test('Check that pagination is visible and has correct text', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Previous' })).toHaveText('«');
        await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Next' })).toHaveText('»');
        await expect(page.getByRole('button', { name: 'Page-1' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-2' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-3' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-4' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-5' })).toBeVisible();
    });

    test('Check that pagination buttons function properly', async ({ page }) => {
    });

    //seeingly redundant test, but i need to double check in the project docs first
    // test('Verfiy arrow buttons are disabled on first and last page', async ({ page }) => {
    //     await page.getByRole('button', { name: 'Page-5' }).click();
    //     await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();
    //     await page.getByRole('button', { name: 'Page-1' }).click();
    //     await expect(page.getByRole('button', { name: 'Previous' })).toBeDisabled();
    // });
});