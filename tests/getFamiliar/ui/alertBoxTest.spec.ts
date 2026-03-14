import { Dialog, expect, Page, test } from '@playwright/test';

test.describe('Alert Box Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Alerts.html');
    });

    test('Validate alert box only with ok button', async ({ page }) => {
        await page.getByRole('link', { name: 'Alert with OK ', exact: true }).click();

        await handleAlertsWith(page, 'accept')
        await page.getByRole('button', { name: 'click the button to display an  alert box:' }).click();

    });

    test('Validate alert box with ok and cancel button', async ({ page }) => {
        await page.getByRole('link', { name: 'Alert with OK & Cancel', exact: true }).click();

        await handleAlertsWith(page, 'accept')
        await page.getByRole('button', { name: 'click the button to display a confirm box ' }).click();
       
        await expect(page.locator('#demo')).toHaveText('You pressed Ok');

      
        await handleAlertsWith(page, 'dismiss')
        await page.getByRole('button', { name: 'click the button to display a confirm box ' }).click();
       
        await expect(page.locator('#demo')).toHaveText('You Pressed Cancel');
    });

    test('Validate alert box with text box', async ({ page }) => {

        await page.getByRole('link', { name: 'Alert with Textbox', exact: true }).click();
        
        await handleAlertsWith(page,'acceptWithPrompt','Praveen')
        await page.getByRole('button', { name: 'click the button to demonstrate the prompt box ' }).click();
       
        await expect(page.locator('#demo1')).toContainText('Praveen');

    });
});

async function handleAlertsWith(page: Page, alertChoice: 'accept' | 'dismiss' | 'acceptWithPrompt', promptText?: string): Promise<void> {

    if (alertChoice === 'acceptWithPrompt' && !promptText) {
        throw new Error('promptText is required')
    }

    page.once('dialog', async (dialog: Dialog) => {
        if (alertChoice === 'accept') {
            await dialog.accept();
        } else if (alertChoice === 'dismiss') {
            await dialog.dismiss();
        } else if (alertChoice === 'acceptWithPrompt') {
            await dialog.accept(promptText)
        }
    })
}
