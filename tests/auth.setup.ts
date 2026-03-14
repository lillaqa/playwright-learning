import { test as setup, expect } from '@playwright/test';
import { pickStaticUser } from '@helpers/selectFromStaticUsers';

setup("Create customer nr. 1", async ({ page, context }) => {
    const user = pickStaticUser();
    const customer1Auth = ".auth/customer1.json";

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await page.getByTestId("email").fill(user.email);
    await page.getByTestId("password").fill(user.password);
    await page.getByTestId("login-submit").click();

    await expect(page.getByRole('menubar')).toContainText(user.name);
    await context.storageState({ path: customer1Auth });
});
