import { Frame, test, FrameLocator, Page, expect } from '@playwright/test';

test('Navigate to iFrame', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await page.getByRole('link', { name: 'iFrame Demo' }).click();

  await page.waitForSelector('iframe');
  const textEditorFrame: FrameLocator = page.frameLocator('#iFrame1');
  await textEditorFrame.getByText('Your content.').fill('praveen');

  const webpageFrame = page.frame({ url: 'https://www.lambdatest.com/support/docs/' });

  console.log(await webpageFrame?.title());
});

test('window testing', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

  const [twitterPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: /Follow On Twitter/i }).click()
  ]);
  await twitterPage.waitForLoadState();

  expect(twitterPage.url()).toEqual('https://x.com/Lambdatesting');
  await expect(twitterPage.getByRole('link', {name:'Log in'})).toBeVisible();
});
  


test('multiple window testing', async ({ page, context }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  
  console.log('No.of.Pages before clicking : ', context.pages().length);
  
  const allpages = await handleMultipleWindows(page, 3, async () => {
    await page.locator('#followall').click();
  });

  console.log('No.of.Tabs after clicking : ', context.pages().length);
  expect(allpages.length).toEqual(3);
  
  for(const indPage of allpages){
      console.log(indPage.url())
  }

  await Promise.all(
      allpages.map(p=>p.close())
  )

   console.log('No.of.Pages after closing additional tabs: ', context.pages().length);
  
  const twoPages = await handleMultipleWindows(page, 2, async () => {
   await page.locator('#followboth').click();
  });

  console.log('No.of.Tabs after clicking again : ', context.pages().length);
  expect(twoPages.length).toEqual(2);

 for(const indPage of twoPages){
      console.log(indPage.url())
  }

  console.log('Test Ends');

});




 async function handleMultipleWindows(page: Page,
                                     num: number,
                                      triggerCallback: () => Promise<void>
                                    ): Promise<Page[]> {
  const multipleWindows: Page[] = [];

  const popuplistner = (newPopup:Page) => {
    multipleWindows.push(newPopup);
  }

  page.on('popup', popuplistner);

  await triggerCallback();

  await page.waitForTimeout(5_000); 

  if (multipleWindows.length < num) {
    throw new Error(`Expected ${num} popups, but only ${multipleWindows.length} opened within 5 seconds.`);
  }

  await Promise.all(multipleWindows.map(popup=>popup.waitForLoadState()))

  page.off('popup', popuplistner);

  return multipleWindows;
} 