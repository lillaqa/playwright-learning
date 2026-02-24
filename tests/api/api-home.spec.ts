import {test, expect} from '@playwright/test';
import { request } from 'https';

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
});

