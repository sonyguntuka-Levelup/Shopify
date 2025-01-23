// shopify-test.spec.js
const { test, expect } = require('@playwright/test');

test('Shopify website test', async ({ page }) => {
    await page.goto('https://brazilianmarket.ca/');

    // Example: Click on a product
    page.waitForSelector('text=Biscoito Polvilho Argolas');
    await page.click('text=Biscoito Polvilho Argolas');

    await page.goto('https://brazilianmarket.ca/collections/collection-1/products/biscoito-polvilho-parmesao-150g-nazinha');

    // Example: Add to cart
    await page.waitForSelector("//button[@class='btn btn-lg btn-addtocart addtocart-js']");
    await page.click("//button[@class='btn btn-lg btn-addtocart addtocart-js']");

    
    // Example: View cart and assert total price
    await page.waitForSelector("//a[@class='btn btn-border ttmodalbtn ttmodalbtn']");
    await page.click("//a[@class='btn btn-border ttmodalbtn ttmodalbtn']");
    await page.waitForSelector("//th[normalize-space()='TOTAL GERAL']");
    const totalPrice = page.locator("//th[normalize-space()='TOTAL GERAL']/following-sibling::td");

    expect(await totalPrice.textContent()).toBe('$3.80');
});