import { expect, Locator, Page } from '@playwright/test';

export class HeaderPage {
    //variables
    readonly page: Page;
    readonly notificationBar: Locator;
    readonly documentationLink: Locator;
    readonly appHeader: Locator;
    readonly guideButton: Locator;
    readonly bugHuntingButton: Locator;
    readonly gearGroup: Locator;
    readonly gearPath: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.notificationBar = this.page.locator('[data-test="notification-bar"]');
        this.documentationLink = this.page.getByRole('link', { name: 'Documentation' });
        this.appHeader = this.page.locator('app-header');
        this.guideButton = this.page.getByRole('button', { name: 'Testing Guide' });
        this.bugHuntingButton = this.page.getByRole('button', { name: 'Bug Hunting' });
        this.gearGroup = this.page.locator('g.gear');
        this.gearPath = this.gearGroup.locator('path');

    }

    //methods

}

export default HeaderPage;