import Pages from "./PageFactory";

class Utils {
  getLocator(element: string, page: string, pageType: string) {
    const pageString = `${page} ${pageType}` as keyof typeof Pages;
    const locator = Pages[pageString].locators[element];
    return locator;
  }

  getPage(page: string) {
    const pageString = `${page} Page` as keyof typeof Pages;
    return pageString;
  }

  async switchToIFrame(locator: string | null) {
    const iFrame: WebdriverIO.Element | null = locator
      ? await $(locator)
      : null;
    await browser.switchToFrame(iFrame);
  }
}

export default new Utils();
