import { test, expect } from '@playwright/test';
import ApiPage from '@pages/api.page';

let apiPage: ApiPage;

test.beforeEach(async ({ page }) => {
    apiPage = new ApiPage(page);
});

test.describe('GET Categories', () => {
    test('GET /categories - without authentication', async ({ request }) => {
        const apiURL = 'https://api.practicesoftwaretesting.com';
        const response = await request.get(apiURL + '/categories');
        const responseBody = await response.json();

        expect(response.status()).toBe(200);
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBeGreaterThan(0);

    });

    test('GET category by search', async ({ request }) => {
        const apiURL = 'https://api.practicesoftwaretesting.com';
        const response = await request.get(apiURL + '/categories/search?q=hand');
        const responseBody = await response.json();

        expect(response.status()).toBe(200);
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBeGreaterThan(0);
    });

    test('GET empty category by search', async ({ request }) => {
        const apiURL = 'https://api.practicesoftwaretesting.com';
        const response = await request.get(apiURL + '/categories/search?q=special');
        const responseBody = await response.json();

        expect(response.status()).toBe(200);
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBe(0);
    });
});

test.describe('GET all brands', () => {
    test('GET /brands', async ({ request }) => {
        const apiURL = 'https://api.practicesoftwaretesting.com';
        const response = await request.get(apiURL + '/brands');
        const responseBody = await response.json();
        //const { id, name, slug } = responseBody[0];

        expect(response.status()).toBe(200);
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBeGreaterThan(0);
        expect(responseBody).toMatchObject([
            {
                id: expect.any(String),
                name: expect.any(String),
                slug: expect.any(String)
            }
        ]);
    });
});
