import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    //variables
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.getByTestId('email');
        this.passwordInput = this.page.getByTestId('password');
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
    }

    //methods

}

export default LoginPage;