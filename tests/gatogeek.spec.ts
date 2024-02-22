import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.gatogeek.com.br/');
  });

  test("main navigation", async ({ page }) => {
    await expect(page).toHaveURL('https://www.gatogeek.com.br/');
  });
});
