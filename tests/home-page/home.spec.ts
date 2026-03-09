import { test, expect } from '@playwright/test';
import HomePage from '@pages/home.page';
import HeaderPage from '@pages/header.page';

let homePage: HomePage;
let headerPage: HeaderPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    headerPage = new HeaderPage(page);
    await homePage.goto();
});

test.describe('Validate home page header', () => {
    test("Validate title", async ({ page }) => {
        await expect(page.getByTitle('Practice Software Testing - Toolshop - v5.0')).toBeVisible();
    });

    //SVG logo, the test needs to be upgraded
    test("Validate logo", async ({ page }) => {
        //await expect(page.getByRole('link', { name: 'Practice Software Testing -' })).toBeVisible();
        await headerPage.logoIsVisible();
        //await expect(headerPage.gearGroup).toBeVisible();
    });

    test("Validate sign in", async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');
    });

    test('Validate banner', async ({ page }) => {
        await expect(homePage.banner).toBeVisible();
    });
});

test.describe('Validate home page main sections', () => {


    test("Validate product grid", async ({ page }) => {
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(9);
        //value alternative
        //expect(await productGrid.getByRole('link').count()).toBe(9);
    });

});

test.describe('Validate sidebar', () => {
    test('Validate sidebar headingtexts', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Sort' })).toHaveText('Sort');
        await expect(page.getByRole('heading', { name: 'Price Range' })).toHaveText('Price Range');
        await expect(page.getByRole('heading', { name: 'Search' })).toHaveText('Search');
        await expect(page.getByRole('heading', { name: 'Filters' })).toHaveText('Filters');
        await expect(page.getByRole('heading', { name: 'By category:' })).toHaveText('By category:');
        await expect(page.getByRole('heading', { name: 'By brand:'})).toHaveText('By brand:');
        await expect(page.getByRole('heading', { name: 'Sustainability:'})).toHaveText('Sustainability:');
    });

    test('validate price range slider default state', async ({ page }) => {
        await expect(homePage.priceSlider.minPointer).toBeVisible();
        await expect(homePage.priceSlider.maxPointer).toBeVisible();
        await expect(homePage.priceSlider.floorLabel).toHaveText(/0/);
        await expect(homePage.priceSlider.ceilLabel).toHaveText('200');
        await expect(homePage.priceSlider.currentMinLabel).toHaveText('1');
        await expect(homePage.priceSlider.currentMaxLabel).toHaveText('100');
    });


});

test.describe('Home page with authentication', () => {
    test.use({ storageState: '.auth/customer1.json' });

    test("Check that customer is signed in", async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();
        await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
    });
});