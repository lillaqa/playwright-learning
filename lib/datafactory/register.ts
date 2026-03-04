import { expect, request } from '@playwright/test';
import { randomState } from '../helpers/states';

export async function registerUser(email: string, password: string) {
    const apiURL = process.env.API_URL;
    const crearequestContext = await request.newContext();
    const response = await crearequestContext.post(apiURL + "/users/register", {
        data: {
            first_name: "John",
            last_name: "Doe",
            dob: "1990-01-01",
            phone: "1234567890",
            email: email,
            password: password,
             address: {
                street: "101 Testing Way",
                city: "New York",
                state: randomState(),
                country: "US",
                postal_code: "55555",
            },
        }
    });

    expect(response.status()).toBe(201);
    return response.status();
}