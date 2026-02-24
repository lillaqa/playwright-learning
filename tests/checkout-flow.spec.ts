import {test, expect} from '@playwright/test';

test.describe('Validate positive checkout flow with authenticated user', () => {
    test.use({storageState: '.auth/customer1.json'});

    test.beforeEach(async ({page}) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    test('add bolt cutters to cart', async ({page}) => {
        await page.getByText('Bolt Cutters').click();
        await page.getByTestId('add-to-cart').click();
        await expect(page.getByTestId('cart-quantity')).toHaveText('1');
    });

    test('proceed to checkout', async ({page}) => {
        await page.getByTestId('nav-cart').click();
        await page.getByTestId('proceed-1').click();
        await page.getByTestId('proceed-2').click();
    });
});