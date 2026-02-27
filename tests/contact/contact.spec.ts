import { test, expect } from '@playwright/test';

test.describe('Check that contact opens', () => {
  test('contact opens', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByTestId('nav-contact').click();
    await expect(page.getByTestId('contact-form')).toBeVisible();
  });
});

test.describe('Validte contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/contact');
  });

  test('Validate UI elements are visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Contact' })).toHaveText('Contact');
    await expect(page.getByText('First name')).toBeVisible();
    await expect(page.getByText('Last name')).toBeVisible();
    await expect(page.getByText('Email address')).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toHaveText('Subject');
    await expect(page.getByText('Message *')).toBeVisible();
    await expect(page.getByText('Attachment')).toBeVisible();
  });

  test('Validate placeholder texts', async ({ page }) => {
    await expect(page.locator('[data-test="first-name"]')).toHaveAttribute('placeholder', 'Your first name *');
    await expect(page.locator('[data-test="last-name"]')).toHaveAttribute('placeholder', 'Your last name *');
    await expect(page.locator('[data-test="email"]')).toHaveAttribute('placeholder', 'Your email *');
    await expect(page.locator('[data-test="subject"]')).toHaveAttribute('placeholder', 'Select a subject *');
  });
});

test.describe('Test mandatory fields', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/contact');
  });

  test('Test mandatory text fields sent empty', async ({ page }) => {
    await page.locator('[data-test="contact-submit"]').click();
    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Subject is required')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });
});

//WIP dropdown option tests, main issue is the locator of the dropdown list and  validating the new text
// test.describe('Test Subject dropdown', () => {
//   test.beforeEach(async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/contact');
//   });

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

test.describe('Validate global UI elements on contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/contact');
  });

  test('Validate header is visible', async ({ page }) => {
    await expect(page.getByTestId('header')).toBeVisible();
  });

  test('Validate footer is visible and text is correct', async ({ page }) => {
    await expect(page.getByRole('paragraph')).toBeVisible();
    await expect(page.getByRole('paragraph')).toHaveText('This is a DEMO application (GitHub repo), used for software testing training purpose. | Privacy Policy | Banner photo by Barn Images on Unsplash.');
    
    await expect(page.getByRole('link', { name: 'GitHub repo' })).toHaveAttribute('href', 'https://github.com/testsmith-io/practice-software-testing');
    
    await expect (page.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
    
    await expect (page.getByRole('link', { name: 'Barn Images' })).toHaveAttribute('href', 'https://unsplash.com/@barnimages');

    await expect(page.getByRole('link', { name: 'Unsplash' })).toHaveAttribute('href', 'https://unsplash.com/photos/t5YUoHW6zRo');
  });
});

