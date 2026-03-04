import { test, expect } from '@playwright/test';
import { registerUser } from '../../lib/datafactory/register';
import LoginPage from '../../pages/login.page';
let loginPage: LoginPage;

test("login with newly registered user", async ({ page }) => {
  const email = `test${Date.now()}@test.com`;
  const password = "246@80AsD";

  await registerUser(email, password);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("John Doe");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});