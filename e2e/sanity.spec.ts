import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('sanity test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplcation();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Irina');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Ka');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('4275820');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

test('demo test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplcation();
});
