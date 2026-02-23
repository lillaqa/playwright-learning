import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/');
//   await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
//   await page.getByRole('slider', { name: 'ngx-slider-max' }).click();
//   await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
//   await page.getByRole('slider', { name: 'ngx-slider-max' }).click();
//   await page.getByTestId('nav-contact').click();
//   await page.getByTestId('first-name').click();
//   await page.getByTestId('first-name').fill('test');
//   await page.getByTestId('last-name').click();
//   await page.getByTestId('last-name').fill('demo');
//   await page.getByTestId('email').click();
//   await page.getByTestId('email').fill('demo');
//   await page.getByTestId('email').press('Alt+@');
//   await page.getByTestId('email').fill('demodemo.io');
//   await page.getByTestId('subject').selectOption('return');
//   await page.getByTestId('message').click();
//   await page.getByTestId('message').fill('hsdfhgjh sjhdgj hdjhgjhdgjh djfhgjhdfgjh fjghdj gjhdjghdjhgdjkhfgjhdfjhgdjhfgjhdgjh dfjhgjdfhgjhdjhgjfdhsjhg jfdhgjhsdgjhruzt ukdsgkdjd');
//   await page.getByTestId('contact-submit').click();
//   await page.getByTestId('email').click();
//   await page.getByText('Email format is invalid').click();
//   await page.getByTestId('nav-contact').click();
// });

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