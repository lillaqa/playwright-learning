import { test, expect } from '@playwright/test';
import FooterPage from '@pages/footer.page';
import HeaderPage from '@pages/header.page';

let footerPage: FooterPage;
let headerPage: HeaderPage;

test.describe('Validate global UI elements on contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/contact');
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