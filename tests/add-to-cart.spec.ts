import { test, expect } from '@playwright/test';

test('Add Product to Cart - Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Add Sauce Labs Backpack to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Open cart
  await page.locator('.shopping_cart_link').click();

  // Verify product appears in cart
  const cartItem = page.locator('.cart_item .inventory_item_name');
  await expect(cartItem).toHaveText('Sauce Labs Backpack');
});
