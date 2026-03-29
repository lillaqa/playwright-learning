import { expect, Locator, Page } from '@playwright/test';

export class FooterPage {
    //variables
    readonly page: Page;
    readonly footerText: Locator;
    readonly gitHubLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly barnImagesLink: Locator;
    readonly unsplashLink: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.footerText = this.page.getByRole('paragraph');
        this.gitHubLink = this.page.getByRole('link', { name: 'GitHub repo' });
        this.privacyPolicyLink = this.page.getByRole('link', { name: 'Privacy Policy' });
        this.barnImagesLink = this.page.getByRole('link', { name: 'Barn Images' });
        this.unsplashLink = this.page.getByRole('link', { name: 'Unsplash' });
    }

    //methods
  
}

export default FooterPage;