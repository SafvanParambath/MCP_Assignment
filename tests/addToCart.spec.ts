import { test, expect } from '@playwright/test';

test('SLIS-9: adding an item updates the button to Remove and sets the cart badge count to 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
