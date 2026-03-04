export {};

declare global {
    namespace PlaywrightTest {
        interface Matchers<R> {
            toBeNumber(): R;
        }
    }
}

import { expect } from '@playwright/test';