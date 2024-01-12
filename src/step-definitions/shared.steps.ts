import { Given, Then, When } from "@wdio/cucumber-framework";
import Pages from "../utils/PageFactory";
import Element from "../utils/Element";
import Utils from "../utils/Utils";

Given(/^I am on the (\w+) page$/, async (page: string) => {
  const pageString = Utils.getPage(page);
  await Pages[pageString].open();
});

Then(/^I should be on the (.*) page$/, async (page: keyof typeof Pages) => {
  const pageString = Utils.getPage(page);
  const pageUrl = Pages[pageString].getUrl();
  expect(await browser.getUrl()).toEqual(pageUrl);
});

When(
  /^I click on the (.*) on the (.*) (page|component)$/,
  async (elementKey: string, page: string, pageType: string) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await Element.get(locator);
    await element.click();
  },
);

Then(
  /^I should see that the (.*) on the (.*) (page|component) is (not ?)displayed$/,
  async (
    elementKey: string,
    page: string,
    pageType: string,
    status: string,
  ) => {
    const locator: string = Utils.getLocator(elementKey, page, pageType);
    const element: WebdriverIO.Element = await Element.get(locator);
    const expectedDisplayStatus = status.trim() !== "not";
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
