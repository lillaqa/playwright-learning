import {test, expect} from '@playwright/test';
import ComparisionPage from '@pages/comparision.page';

let comparisionPage: ComparisionPage;

test.beforeEach(async ({ page }) => {
    comparisionPage = new ComparisionPage(page);
    await page.goto('https://practicesoftwaretesting.com/');
});