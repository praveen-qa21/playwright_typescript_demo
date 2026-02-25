import { test, expect, Locator } from "@playwright/test";

test("calculate the total of price from webTable", async ({ page }) => {

    await page.goto('https://letcode.in/table/');

    const priceTable = page.locator('#shopping');
    const tableRows = await priceTable.getByRole('row').all();
    const priceRows = tableRows.slice(1, -1);
    const totalAmt = await priceTable.getByRole('row', { name: 'Total' }).getByRole('cell').nth(1).textContent();
    let amt = 0;

    const priceArray = await Promise.all(
        priceRows.map(async (row) => {
            const value = await row.getByRole('cell').nth(1).innerText();
            return Number(value);
        })
    )

    priceArray.forEach(price =>
        amt = amt + price
    )

    console.log("Printing all price", priceArray)
    console.log("calculated value", amt)

    expect(amt).toBeCloseTo(Number(totalAmt))

});


test("Dynamic Webtable: ", async({page})=> {

    await page.goto('https://practice.expandtesting.com/dynamic-table');

    //Test data
    const expectedRow = 'Chrome';
    const expectedColumn = 'CPU';

    const headers = await page.locator('thead th').allInnerTexts();
    console.log("All headers", headers)
    const expIndex = headers.indexOf(expectedColumn);
    console.log(`${expectedColumn} is at index: `, expIndex)

    const value = await page.locator('tbody tr')
        .filter({ hasText: expectedRow })
        .getByRole('cell')
        .nth(expIndex).innerText();

    console.log(`${expectedColumn} of ${expectedRow} is : `, value);
   // await page.waitForTimeout(3000);
   
    expect(await page.locator('#chrome-cpu').innerText()).toContain(value);


})



