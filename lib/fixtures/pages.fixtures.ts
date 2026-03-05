import { test as baseTests} from '@playwright/test';
import LoginPage from 'pages/login.page';

type MyPages = {
    loginPage: LoginPage;
}

export const test = baseTests.extend<MyPages>({
    loginPage: async ({ page }, use) => {
        await use (new LoginPage(page));
    },
});

export { expect } from '@playwright/test';