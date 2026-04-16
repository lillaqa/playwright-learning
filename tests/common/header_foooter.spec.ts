import { test, expect } from '@playwright/test';
import FooterPage from '@pages/footer.page';
import HeaderPage from '@pages/header.page';
import { pickRandomCategory } from '@helpers/categoryDropdown';

let footerPage: FooterPage;
let headerPage: HeaderPage;

test.describe('Validate site navigation and common UI elements', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    footerPage = new FooterPage(page);
    headerPage = new HeaderPage(page);
  });

  test.afterEach(async ({ page }) => {
    await expect(headerPage.notificationBar).toHaveText('View the Documentation for this application.');
    await expect(headerPage.documentationLink).toHaveAttribute('href', 'https://testsmith-io.github.io/practice-software-testing/#/');
    await expect(headerPage.appHeader).toContainText('Practice Black Box Testing & Bug Hunting');
    await expect(headerPage.guideButton).toHaveText('Testing Guide');
    await expect(headerPage.bugHuntingButton).toContainText('Bug Hunting');
    await expect(headerPage.gearGroup).toBeVisible();
    await footerPage.footerText.filter({ hasText: 'This is a DEMO application' }).waitFor();
    //await expect(footerPage.footerText).toHaveText('This is a DEMO application (GitHub repo), used for software testing training purpose. | Privacy Policy | Banner photo by Barn Images on Unsplash.');
    await expect(footerPage.gitHubLink).toHaveAttribute('href', 'https://github.com/testsmith-io/practice-software-testing');
    await expect(footerPage.privacyPolicyLink).toHaveAttribute('href', '/privacy');
    await expect(footerPage.barnImagesLink).toHaveAttribute('href', 'https://unsplash.com/@barnimages');
    await expect(footerPage.unsplashLink).toHaveAttribute('href', /t5YUoHW6zRo/);
    // await expect(footerPage.unsplashLink).toHaveAttribute('href', 'https://unsplash.com/photos/t5YUoHW6zRo');
  });

  test('Check contact page navigation and header/footer elements', async ({ page }) => {
    await page.getByTestId('nav-contact').click();
    //await expect(contactPage.contactForm).toBeVisible();
  });

  test('Check product page navigation and header/footer elements', async ({ page }) => {
    await page.getByText('Slip Joint Pliers').click();    
  });

  test('Check sign in page navigation and header/footer elements', async ({ page }) => {
    await page.getByTestId('nav-sign-in').click();  
  });

  test('Check category page navigation and header/footer elements', async ({ page }) => {
    const randomCategory = pickRandomCategory();
    await page.getByTestId('nav-categories').click();
    await page.getByRole('link', { name: randomCategory }).click();
  });
});