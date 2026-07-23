const { test, expect } = require('@playwright/test');

test('Saucedemo add product to cart', async ({ page }) => {
  // Login with valid user
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify user is on products page
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  // Add Sauce Labs Backpack to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Validate cart badge count
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Open cart and validate added product
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/.*cart.html/);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});
