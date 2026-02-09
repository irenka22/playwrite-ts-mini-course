import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UserCredentials from '../helpers/UserCredentials';
import ApplicationURL from '../helpers/ApplicationURL';

test('sanity test', async ({ page }) => {
  
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



test('demo test_2', async ({ page }) => {
  

  const loginPage = new LoginPage(page);
  await.loginPage.validatePageURL(ApplicationURL.BASE_URL);
  await loginPage.loginToApplcation(UserCredentials.LOCKED_OUT_USER, UserCredentials.CORRECT_PASSWORD,ApplicationURL.BASE_URL);
});
