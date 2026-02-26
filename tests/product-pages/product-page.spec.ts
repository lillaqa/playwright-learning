import {test, expect} from '@playwright/test';

test.describe('Validate product page without authentication', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.getByText('Slip Joint Pliers').click();
    });

    test('Validate pruduct detail text elements', async ({page}) => {
        await expect(page.getByTestId('product-name')).toHaveText('Slip Joint Pliers');
        await expect(page.getByLabel('category')).toHaveText('Pliers');
        await expect(page.getByLabel('brand')).toHaveText('MightyCraft Hardware');
        await expect(page.getByText('$')).toBeVisible();
        await expect(page.getByTestId('unit-price')).toHaveText('9.17');
        await expect(page.getByTestId('product-description')).not.toBeEmpty();
        await expect(page.getByTestId('add-to-cart')).toHaveText('Add to cart');
        await expect(page.getByTestId('add-to-favorites')).toHaveText('Add to favourites');
        //wait expect(page.getByTestId('product-image')).toBeVisible();
    });

    test('Validate buttons are visible and enabled', async ({page}) => {
        await expect(page.getByTestId('add-to-cart')).toBeVisible();
        await expect(page.getByTestId('add-to-cart')).toBeEnabled();
        await expect(page.getByTestId('add-to-favorites')).toBeVisible();
        await expect(page.getByTestId('add-to-favorites')).toBeEnabled();
    });
});