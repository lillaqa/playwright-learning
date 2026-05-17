import { Page, Locator } from "@playwright/test";

export class ApiPage {

    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }
}


export default ApiPage;
