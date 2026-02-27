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

  test('Validate texts', async ({ page }) => {
    await expect(page.getByText('First name')).toBeVisible();
    await expect(page.getByText('Last name')).toBeVisible();
    await expect(page.getByText('Email address')).toBeVisible();
    await expect(page.getByText('Subject')).toBeVisible();
    await expect(page.getByText('Message')).toBeVisible();
    await expect(page.getByText('Attachment')).toBeVisible();
  });
});