const { test, expect } = require('@playwright/test');

test('user can log in and add Sauce Labs Backpack to the cart', async ({ page }) => {
  const username = 'standard_user';
  const password = 'secret_sauce';
  const productName = 'Sauce Labs Backpack';

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL(/saucedemo\.com\/$/);

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL(/inventory\.html$/, { timeout: 15000 });
  await expect(page.locator('.title')).toHaveText('Products');

  const productCard = page.locator('.inventory_item').filter({ hasText: productName }).first();
  await expect(productCard).toBeVisible();
  await productCard.getByRole('button', { name: /add to cart/i }).click();

  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  await expect(cartBadge).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL(/cart\.html$/);
  await expect(page.locator('.cart_item')).toContainText(productName);
  await expect(page.locator('.cart_item')).toHaveCount(1);
});
