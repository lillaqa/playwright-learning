import { test, expect } from '@playwright/test';
import { ContactPage } from '@pages/contact.page';
import { pickRandomOption } from '@helpers/contactOptions';
import { generateRandomString } from '@helpers/randomText';

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

test.describe('Test form validations', () => {
  test.beforeEach(async ({ page }) => {
    contactPage.goto();
  });

  test('Test mandatory text fields sent empty', async ({ page }) => {
    await contactPage.sendButton.click();
    await expect(contactPage.firstNameMandatory).toBeVisible();
    await expect(contactPage.lastNameMandatory).toBeVisible();
    await expect(contactPage.emailMandatory).toBeVisible();
    await expect(contactPage.subjectMandatory).toBeVisible();
    await expect(contactPage.messageMandatory).toBeVisible();
  });

  test('Test invalid email format', async ({ page }) => {
    const invalidEmail = generateRandomString(7);
    await contactPage.emailTextbox.fill(invalidEmail);
    await contactPage.sendButton.click();
    await expect(page.getByText('Email format is invalid')).toBeVisible();
  });

  test('Too short message', async ({ page }) => {
    const shortMessage = generateRandomString(49);
    await contactPage.messageTextbox.fill(shortMessage);
    await contactPage.sendButton.click();
    await expect(page.getByText('Message must be minimal 50 characters')).toBeVisible();
  });

  test('Too long message', async ({ page }) => {
    const longMessage = generateRandomString(251);
    const goodInput = generateRandomString(8);
    const randomOption = pickRandomOption();
    await contactPage.firstNameTextbox.fill(goodInput);
    await contactPage.lastNameTextbox.fill(goodInput);
    await contactPage.emailTextbox.fill("test@test.ji");
    //todo this locator could be improved. 
    await page.click('[data-test="subject"]');
    await page.selectOption('[data-test="subject"]', randomOption);
    await contactPage.messageTextbox.fill(longMessage);
    await contactPage.sendButton.click();
    await expect(page.getByText('The message field must not be greater than 250 characters.')).toBeVisible();
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



