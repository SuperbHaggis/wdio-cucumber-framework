import { browser } from "@wdio/globals";
import { Locators } from "../types/Locators.type";

export default class Page {
  path: string;
  url: string = "https://preview.drivethrurpg.com/en";
  locators: Locators;

  public getUrl() {
    return `${this.url}/${this.path}`;
  }

  public open() {
    return browser.url(`${this.url}/${this.path}`);
  }
}
