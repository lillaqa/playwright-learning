import { test as setup, expect } from '@playwright/test';
import { pickStaticUser } from '@helpers/selectFromStaticUsers';

setup('Create customer nr. 1', { tag: '@authenticated' }, async ({ page, context }) => {
    const user = pickStaticUser();
    const customer1Auth = ".auth/customer1.json";

    await page.goto("https://practicesoftwaretesting.com/auth/login"); 
    // const emailInput = page.locator('[data-test="email"]');
    // await emailInput.waitFor({ state: 'visible' }); 
    // await emailInput.fill("customer@practicesoftwaretesting.com");
    // await page.getByTestId("password").fill("welcome01");
    // await page.getByTestId("login-submit").click();

    // await expect(page.getByRole('menubar')).toContainText("Jane Doe");

    await page.locator('[data-test="email"]').fill(user.email);
    await page.getByTestId("password").fill(user.password);
    await page.getByTestId("login-submit").click();

    //await expect(page.getByText(user.name)).toBeVisible();
    //await expect(page.getByRole('menubar')).toContainText(user.name);
    await context.storageState({ path: customer1Auth });
    await expect(page.getByTestId('page-title')).toHaveText('My account');
});
