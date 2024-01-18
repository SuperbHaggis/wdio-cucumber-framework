class Waiters {
  async waitUntilPageIsLoaded() {
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60000,
        timeoutMsg: "Page loading exceeded max timeout",
      },
    );
  }

  async waitForUrl(pageUrl: string) {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes(pageUrl),
      {
        timeout: 60000,
        timeoutMsg: "Page loading exceeded max timeout",
      },
    );
  }
}

export default new Waiters();
