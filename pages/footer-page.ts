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
    async validateFooterText() {
        await expect(this.page.getByRole('paragraph')).toHaveText('This is a DEMO application (GitHub repo), used for software testing training purpose. | Privacy Policy | Banner photo by Barn Images on Unsplash.');
    }

    async validateGitHubLink() {
        await expect(this.gitHubLink).toHaveAttribute('href', 'https://github.com/testsmith-io/practice-software-testing');
    }

    async validatePrivacyPolicyLink() {
        await expect(this.privacyPolicyLink).toHaveAttribute('href', '/privacy');
    }

    async validateBarnImagesLink() {
        await expect(this.barnImagesLink).toHaveAttribute('href', 'https://unsplash.com/@barnimages');
    }

    async validateUnsplashLink() {
        await expect(this.unsplashLink).toHaveAttribute('href', 'https://unsplash.com/photos/t5YUoHW6zRo');
    }
}

export default FooterPage;