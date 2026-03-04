import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    //variables
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly loginButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.getByTestId('email');
        this.passwordInput = this.page.getByTestId('password');
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
        this.loginButton = this.page.getByTestId('login-submit');
    }

    //methods
    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

}

export default LoginPage;