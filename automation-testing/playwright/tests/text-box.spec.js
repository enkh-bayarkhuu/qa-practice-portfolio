
import { test, expect } from '@playwright/test';

test('Verify Text Box form submission', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/demosite/);

  // fill in the form
  await page.getByPlaceholder('Full Name').fill('Test User');
  await expect(page.getByPlaceholder('Full Name')).toHaveValue('Test User');

  await page.getByPlaceholder('name@example.com').fill('adam12@yahoo.com');
  await expect(page.getByPlaceholder('name@example.com')).toHaveValue('adam12@yahoo.com');

  await page.getByPlaceholder('Current Address').fill('12 3 Ave NW');
  await expect(page.getByPlaceholder('Current Address')).toHaveValue('12 3 Ave NW');

  await page.locator('#permanentAddress').fill('456 78 Ave SW');
  await expect(page.locator('#permanentAddress')).toHaveValue('456 78 Ave SW');

  // submit the form
  await page.getByRole('button', { name: 'Submit' }).click();

  // verify submitted information
  await expect(page.locator('#name')).toHaveText('Name:Test User');
  await expect(page.locator('#email')).toHaveText('Email:adam12@yahoo.com');
  await expect(page.getByText('Current Address :12 3 Ave NW')).toBeVisible();
  await expect(page.getByText('Permananet Address :456 78 Ave SW')).toBeVisible();

});

test('Verify Text Box form submission with empty fields', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  // submit without entering any information
  await page.getByRole('button', { name: 'Submit' }).click();

  // verify that no output is displayed
  await expect(page.locator('#output')).not.toBeVisible();

});
