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

  test('Validate  elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact' })).toHaveText('Contact');
    await expect(page.getByText('First name')).toBeVisible();
    await expect(page.getByText('Last name')).toBeVisible();
    await expect(page.getByText('Email address')).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toBeVisible();
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