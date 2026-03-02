import { expect, Locator, Page } from '@playwright/test';

export class FooterPage {
    //variables
    readonly page: Page;
    readonly footer: Locator = this.page.locator('footer');
    readonly footerText: Locator = this.footer.getByRole('paragraph');
    readonly gitHubLink: Locator = this.footer.getByRole('link', { name: 'GitHub repo' });
    readonly privacyPolicyLink: Locator = this.footer.getByRole('link', { name: 'Privacy Policy' });
    readonly barnImagesLink: Locator = this.footer.getByRole('link', { name: 'Barn Images' });
    readonly unsplashLink: Locator = this.footer.getByRole('link', { name: 'Unsplash' });

    //constructor
    constructor(page: Page) {
        this.page = page;
    }

    //methods
    async validateFooterText() {
        await expect(this.footer.getByRole('paragraph')).toHaveText('This is a DEMO application (GitHub repo), used for software testing training purpose. | Privacy Policy | Banner photo by Barn Images on Unsplash.');
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
        await expect(this.unsplashLink).toHaveAttribute('href', 'https://unsplash.com/t5YUoHW6zRo');
    }
}

export default FooterPage;