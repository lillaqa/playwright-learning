import {test, expect} from '@playwright/test';
import { HomePage } from '@pages/home.page';
import { ProductPage } from '@pages/product.page';
import { CheckoutPage } from '@pages/checkout.page';

let homePage: HomePage;
let productPage: ProductPage;
let checkoutPage: CheckoutPage;
//let headerPage: HeaderPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    //headerPage = new HeaderPage(page);
    await homePage.goto();
});

test.describe('Validate positive checkout flow with authenticated user', () => {
    test.use({storageState: '.auth/customer1.json'});

    test('add bolt cutters to cart', async ({page}) => {
        await page.getByText('Bolt Cutters').click();
        await productPage.addToCart.click();
        await expect(productPage.cartQuantity).toHaveText('1');
    });

    test('proceed to checkout', async ({page}) => {
        await page.getByText('Bolt Cutters').click();   
        await productPage.addToCart.click();
        await expect(productPage.cartQuantity).toHaveText('1');
        await page.getByTestId('nav-cart').click();
        await checkoutPage.proceedButton.click();
    });
});