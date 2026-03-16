import { test, expect } from '@playwright/test';
import { ContactPage } from '@pages/contact.page';

let contactPage: ContactPage;


test.beforeEach(async ({ page }) => {
  contactPage = new ContactPage(page);
});

test.describe('Check that contact opens', () => {
  test('contact opens', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByTestId('nav-contact').click();
    await expect(contactPage.contactForm).toBeVisible();
  });
});

test.describe('Validte contact form', () => {
  test.beforeEach(async ({ page }) => {
    contactPage.goto();
  })

  test('Validate UI elements are visible', async ({ page }) => {
    await expect(contactPage.contactHeading).toHaveText('Contact');
    await expect(page.getByText('First name')).toBeVisible();
    await expect(page.getByText('Last name')).toBeVisible();
    await expect(page.getByText('Email address')).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toHaveText('Subject');
    await expect(page.getByText('Message *')).toBeVisible();
    await expect(page.getByText('Attachment')).toBeVisible();
  });

  test('Validate placeholder texts', async ({ page }) => {
    await expect(contactPage.firstNameTextbox).toHaveAttribute('placeholder', 'Your first name *');
    await expect(contactPage.lastNameTextbox).toHaveAttribute('placeholder', 'Your last name *');
    await expect(contactPage.emailTextbox).toHaveAttribute('placeholder', 'Your email *');
    //await expect(page.locator('[data-test="subject"]')).toHaveAttribute('placeholder', 'Select a subject *');
  });
});

test.describe('Test mandatory fields', () => {
  test.beforeEach(async ({ page }) => {
    contactPage.goto();
  })
  test('Test mandatory text fields sent empty', async ({ page }) => {
    await contactPage.sendButton.click();
    await expect(contactPage.firstNameMandatory).toBeVisible();
    await expect(contactPage.lastNameMandatory).toBeVisible();
    await expect(contactPage.emailMandatory).toBeVisible();
    await expect(contactPage.subjectMandatory).toBeVisible();
    await expect(contactPage.messageMandatory).toBeVisible();
  });
});

//WIP dropdown option tests, main issue is the locator of the dropdown list and  validating the new text
// test.describe('Test Subject dropdown', () => {

//   test('Validate dropdown options', async ({ page }) => {
//     const dropdown = page.locator('[data-test="subject"]');
//     await dropdown.click();

//     await expect(page.getByText('Customer service')).toBeVisible();
//     await expect(page.getByText('Webmaster')).toBeVisible();
//     await expect(page.getByText('Return')).toBeVisible();
//     await expect(page.getByText('Payments')).toBeVisible();
//     await expect(page.getByText('Warranty')).toBeVisible();
//     await expect(page.getByText('Status of my order')).toBeVisible();

//     const options = dropdown.locator('option');
//     await expect(options).toHaveCount(6);
//     await expect(options.nth(0)).toHaveText('Customer service');
//     await expect(options.nth(1)).toHaveText('Webmaster');
//     await expect(options.nth(2)).toHaveText('Return');
//     await expect(options.nth(3)).toHaveText('Payments');
//     await expect(options.nth(4)).toHaveText('Warranty');
//     await expect(options.nth(5)).toHaveText('Status of my order');
//   });

//   test('Check selecting customer service option', async ({ page }) => {
//     //await page.locator('[data-test="subject"]').click();
//     await page.locator('[data-test="subject"]').selectOption('customer-service');
//     //await expect(page.locator('[data-test="subject"]')).toHaveText('Customer service');
//     await expect(page.getByText('Subject', {exact: true})).toHaveText('Customer service');
//   });

// });



