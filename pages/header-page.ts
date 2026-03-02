import { expect, Locator, Page } from '@playwright/test';

export class HeaderPage {
    //variables
    readonly page: Page;
    readonly notificationBar: Locator;
    readonly documentationLink: Locator;
    readonly appHeader: Locator;
    readonly guideButton: Locator;
    readonly bugHuntingButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.notificationBar = this.page.locator('[data-test="notification-bar"]');
        this.documentationLink = this.page.getByRole('link', { name: 'Documentation' });
        this.appHeader = this.page.locator('app-header');
        this.guideButton = this.page.getByRole('button', { name: 'Testing Guide' });
        this.bugHuntingButton = this.page.getByRole('button', { name: 'Bug Hunting' });
    }

    //methods
    async validateNotificationBar() {
        await expect(this.notificationBar).toBeVisible();
        await expect(this.notificationBar).toHaveText('View the Documentation for this application.');
    }

    async validateDocumentationLink() {
        await expect(this.documentationLink).toHaveAttribute('href', 'https://testsmith-io.github.io/practice-software-testing/#/');
    }

    async validateAppHeader() {
        await expect(this.appHeader).toBeVisible();
        await expect(this.appHeader).toContainText('Practice Black Box Testing & Bug Hunting');
        await expect(this.guideButton).toBeVisible();
        await expect(this.bugHuntingButton).toBeVisible();
        await expect(this.guideButton).toHaveText('Testing Guide');
        await expect(this.bugHuntingButton).toContainText('Bug Hunting');  

    }

}

export default HeaderPage;