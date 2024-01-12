import { browser } from "@wdio/globals";

export default class Page {
  path: string;
  url: string = "https://preview.drivethrurpg.com/en/";

  public getUrl() {
    return `${this.url}/${this.path}`;
  }

  public open() {
    return browser.url(`${this.url}/${this.path}`);
  }
}
