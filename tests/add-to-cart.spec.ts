import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByText('Wrench').click();
  await page.locator('[data-test="product-01KJ4VMJY5Y705Q4TX19J9H6VZ"]').click();
  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.getByRole('alert', { name: 'Product added to shopping' }).click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('[data-test="proceed-1"]')).toContainText('Proceed to checkout');
  await expect(page.locator('[data-test="continue-shopping"]')).toContainText('Continue Shopping');
  await expect(page.locator('[data-test="product-title"]')).toContainText('Adjustable Wrench');
  await expect(page.getByRole('link', { name: 'Practice Software Testing -' })).toBeVisible();
});