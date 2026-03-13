import { test as setup, expect } from '@playwright/test';
import { pickStaticUser } from '@helpers/selectFromStaticUsers';

setup("Create customer nr. 1", async ({ page, context }) => {
    const email = pickStaticUser().email;
    const password = pickStaticUser().password;
    const name = pickStaticUser().name
    const customer1Auth = ".auth/customer1.json";

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await page.getByTestId("email").fill(email);
    await page.getByTestId("password").fill(password);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("nav-menu")).toContainText(name);
    await context.storageState({ path: customer1Auth });
});

