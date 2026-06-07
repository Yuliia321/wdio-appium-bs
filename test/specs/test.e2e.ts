import { expect, browser, $ } from '@wdio/globals';

describe('Sample iOS App', () => {

    it('should display UI Elements screen on launch', async () => {
        await browser.pause(2000);
        const title = await $('~UI Elements');
        await expect(title).toBeDisplayed();
    });

    it('should navigate to Text screen', async () => {
        const textBtn = await $('~Text Button');
        await textBtn.click();
        await browser.pause(1000);
        const textScreen = await $('~Text');
        await expect(textScreen).toBeDisplayed();
    });

   it('should navigate back and open Alert screen', async () => {
    await browser.back();
    await browser.pause(1000);
    const alertBtn = await $('//XCUIElementTypeStaticText[@name="Alert"]');
    await alertBtn.click();
    await browser.pause(1000);
    const alertDialog = await $('~Alert');
    await expect(alertDialog).toBeDisplayed();
    // Close the alert
    const okBtn = await $('~OK');
    await okBtn.click();
    await browser.pause(1000);
});

    it('should navigate to Web View tab', async () => {
        await browser.back();
        await browser.pause(1000);
        const webViewTab = await $('~Web View');
        await webViewTab.click();
        await browser.pause(1000);
        await expect(webViewTab).toBeDisplayed();
    });

    it('should navigate to Local Testing tab', async () => {
        const localTestingTab = await $('~Local Testing');
        await localTestingTab.click();
        await browser.pause(1000);
        await expect(localTestingTab).toBeDisplayed();
    });

});