// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveURL(/google/)
});


