import test, { expect } from "@playwright/test";

test('Simple validation for Date Fields', async({page})=>{
const userData = "2024-05-20";  //YYYY-MM-DD
await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
//input type = date
await page.locator('#birthday').fill(userData);
await expect(page.locator('#birthday')).toHaveValue(userData);
//input type = text
await page.getByPlaceholder('Start date').fill('01-01-2025');
await expect(page.getByPlaceholder('Start date')).toHaveValue('01-01-2025');
await page.getByPlaceholder('End date').fill('01-10-2027');
await expect(page.getByPlaceholder('End date')).toHaveValue('01-10-2027');


await page.goto('https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo');
//input type = text
await page.getByRole('textbox',{name:'from'}).fill('01-01-2025');
await expect(page.getByRole('textbox',{name:'from'})).toHaveValue('01-01-2025');
await page.getByRole('textbox',{name:'to'}).fill('01-01-2026');
await expect(page.getByRole('textbox',{name:'to'})).toHaveValue('01-01-2026');


});


