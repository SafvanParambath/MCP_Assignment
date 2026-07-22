import { test, expect } from '@playwright/test';

test('SLIS-7: user can log in successfully with valid credentials', async ({ page }) => {
  // Preconditions
  // - The user is on the SauceDemo login page.
  // - The user has valid credentials: standard_user / secret_sauce.

  await page.goto('https://www.saucedemo.com/');

  // Steps
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Expected results
  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(page.locator('.app_logo')).toBeVisible();
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.locator('.shopping_cart_link')).toBeVisible();
});
