import { expect, test } from '@playwright/test';

test.describe('test hotkeys', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('using hotkey "Alt+T" switches theme', async ({ page }) => {
        await expect(page.locator('html')).toHaveAttribute('data-mantine-color-scheme');

        const initialColorScheme = await page.locator('html').getAttribute('data-mantine-color-scheme');

        await page.keyboard.press('Alt+T');

        const expectedColorScheme = initialColorScheme === 'dark' ? 'light' : 'dark';
        const colorScheme = await page.locator('html').getAttribute('data-mantine-color-scheme');

        expect(colorScheme).toBe(expectedColorScheme);
    });

    test('using hotkey "Alt+K" opens hotkeys dialog', async ({ page }) => {
        await page.keyboard.press('Alt+K');
        await expect(page.getByText('Toggle Hot Keys Modal')).toBeVisible();
    });
});
