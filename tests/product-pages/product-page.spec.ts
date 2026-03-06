import {test, expect} from '@playwright/test';
import FooterPage from '@pages/footer.page';
import HeaderPage from '@pages/header.page';

let footerPage: FooterPage;
let headerPage: HeaderPage;

test.beforeEach(async ({page}) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByText('Slip Joint Pliers').click();
});

test.describe('Validate product page without authentication', () => {

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

    test('Validate quantity selector is visible and enabled', async ({page}) => {
        await expect(page.getByTestId('decrease-quantity')).toBeVisible();
        await expect(page.getByTestId('decrease-quantity')).toBeEnabled();
        await expect(page.getByTestId('quantity')).toHaveValue('1');
        await expect(page.getByTestId('increase-quantity')).toBeVisible();
        await expect(page.getByTestId('increase-quantity')).toBeEnabled();
    });

    test('Validate add to favorite button functionality as a guest', async ({page}) => {
        await page.getByTestId('add-to-favorites').click();
        await expect(page.getByRole('alert', {name: 'Unauthorized, can not add' })).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Unauthorized, can not add' })).toHaveText('Unauthorized, can not add product to your favorite list.');
    });

    test('Validate add to cart button functionality as a guest', async ({page}) => {
        await page.getByTestId('add-to-cart').click();
        await expect(page.getByRole('alert', {name: 'Product added to shopping' })).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Product added to shopping' })).toHaveText('Product added to shopping cart.');
        await expect(page.getByTestId('cart-quantity')).toHaveText('1');
    });

});

test.describe('Validate product page with authenticated user', () => {
    test.use({ storageState: '.auth/customer2.json' });
    test.beforeEach(async ({page}) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.getByText('Thor Hammer').click();
    });

    test('Validate add to favorite button functionality as an authenticated user', async ({page}) => {
        await page.getByTestId('add-to-favorites').click();
        await expect(page.getByRole('alert', {name: 'Product added to your' })).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Product added to your' })).toHaveText('Product added to your favorites list.');
    });

    test('Validate add to cart button functionality as a guest', async ({page}) => {
        await page.getByTestId('add-to-cart').click();
        await expect(page.getByRole('alert', {name: 'Product added to shopping' })).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Product added to shopping' })).toHaveText('Product added to shopping cart.');
        await expect(page.getByTestId('cart-quantity')).toHaveText('1');
    });
});

test.describe('Validate global UI elements on product page', () => {
  test.beforeEach(async ({ page }) => {
    footerPage = new FooterPage(page);
    headerPage = new HeaderPage(page);
  });

  test('Validate header elements: notification bar', async ({ page }) => {
    await headerPage.validateNotificationBar();
    await headerPage.validateDocumentationLink();
  });

  test('Validate header elements: app header', async ({ page }) => {
    await headerPage.validateAppHeader();
  });

  test('Validate footer is visible and text is correct', async ({ page }) => {
    await footerPage.validateFooterText();
    await footerPage.validateGitHubLink();
    await footerPage.validatePrivacyPolicyLink();
    await footerPage.validateBarnImagesLink();
    await footerPage.validateUnsplashLink();
  });
});

