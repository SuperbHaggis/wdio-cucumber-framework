import { Given, Then, When } from "@wdio/cucumber-framework";
import Pages from "../utils/PageFactory";
import Utils from "../utils/Utils";
import Waiters from "../utils/Waiters";

Given(/^I am on the "(\w+)" page$/, async (page: string) => {
  const pageString = Utils.getPage(page);
  await Pages[pageString].open();
});

When(
  /^I click on the "(.*)" on the "(.*) (Page|Component)"$/,
  async (elementKey: string, page: string, pageType: string) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element = await $(locator);
    await element.click();
  },
);

When(/^I wait for the page to load$/, async () => {
  await Waiters.waitUntilPageIsLoaded();
});

Then(/^I should be on the "(.*)" page$/, async (page: keyof typeof Pages) => {
  const pageString = Utils.getPage(page);
  const pageUrl = Pages[pageString].getUrl();
  await Waiters.waitForUrl(pageUrl);
  const actualUrl = await browser.getUrl();
  expect(actualUrl).toContain(pageUrl);
});

Then(
  /^I should see that the "(.*)" on the "(.*) (Page|Component)" is (not )?displayed$/,
  async (
    elementKey: string,
    page: string,
    pageType: string,
    displayStatus: string,
  ) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await $(locator);
    const expectedDisplayStatus = displayStatus === "not " ? false : true;

    await element.waitForDisplayed({ reverse: !expectedDisplayStatus });

    expect(await element.isDisplayed()).toEqual(expectedDisplayStatus);
  },
);

Then(
  /^I should see that the "(.*)" on the "(.*) (Page|Component)" has text "(.*)"$/,
  async (
    elementKey: string,
    page: string,
    pageType: string,
    expectedText: string,
  ) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await $(locator);

    const actualText = await element.getText();
    expect(actualText).toEqual(expectedText);
  },
);
