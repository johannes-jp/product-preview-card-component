import { test } from '@playwright/test';

test('screenshot desktop and mobile versions in all browsers', async ({ page }, workerInfo) => {

  // await page.goto('https://product-preview-card-component-five-ebon.vercel.app/');
  await page.goto('http://localhost:5173/');

  // take a screenshot
  await page.screenshot({ path:`./test-results/${workerInfo.project.name}.png`, fullPage: true });

});


// #################################

// import { test, expect } from '@playwright/test';

// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });