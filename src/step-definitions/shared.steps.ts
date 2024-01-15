import { Given, Then, When } from "@wdio/cucumber-framework";
import Pages from "../utils/PageFactory";
import Element from "../utils/Element";
import Utils from "../utils/Utils";

Given(/^I am on the "(\w+)" page$/, async (page: string) => {
  const pageString = Utils.getPage(page);
  await Pages[pageString].open();
});

Then(/^I should be on the "(.*)" page$/, async (page: keyof typeof Pages) => {
  const pageString = Utils.getPage(page);
  const pageUrl = Pages[pageString].getUrl();
  expect(await browser.getUrl()).toEqual(pageUrl);
});

When(
  /^I click on the "(.*)" on the "(.*) (Page|Component)"$/,
  async (elementKey: string, page: string, pageType: string) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await Element.get(locator);
    await element.click();
  },
);

Then(
  /^I should see that the "(.*)" on the "(.*) (Page|Component)" is (not )?displayed$/,
  async (
    elementKey: string,
    page: string,
    pageType: string,
    displayStatus: string,
  ) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await Element.get(locator);
    const expectedDisplayStatus = displayStatus === "not " ? false : true;

    await element.waitForDisplayed({ reverse: !expectedDisplayStatus });

    expect(await element.isDisplayed()).toEqual(expectedDisplayStatus);
  },
);

When(/^I wait for the page to load$/, async () => {
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60000,
      timeoutMsg: "Page loading exceeded max timeout",
    },
  );
});

Then(
  /^I should see that the "(.*)" on the "(.*) (Page|Component)" has text "(.*)"$/,
  async (
    elementKey: string,
    page: string,
    pageType: string,
    expectedText: string,
  ) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await Element.get(locator);

    const actualText = await element.getText();
    expect(actualText).toEqual(expectedText);
  },
);
