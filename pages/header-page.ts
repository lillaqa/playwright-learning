import { expect, Locator, Page } from '@playwright/test';

export class HeaderPage {
    //variables
    readonly page: Page;
    readonly notificationBar: Locator;
    readonly documentationLink: Locator;


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.notificationBar = this.page.locator('[data-test="notification-bar"]');
        this.documentationLink = this.page.getByRole('link', { name: 'Documentation' });
    }

    //methods
    async validateNotificationBar() {
        await expect(this.notificationBar).toBeVisible();
        await expect(this.notificationBar).toHaveText('View the Documentation for this application.');
    }

    async validateDocumentationLink() {
        await expect(this.documentationLink).toHaveAttribute('href', 'https://testsmith-io.github.io/practice-software-testing/#/');
    }

}

export default HeaderPage;