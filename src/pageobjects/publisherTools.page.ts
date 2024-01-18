import { Locators } from "../types/Locators.type";
import Page from "./page";

class PublisherToolsPage extends Page {
  constructor() {
    super();
  }

  path: string = "https://www.drivethrurpg.com/pub_tools.php";

  locators: Locators = {};

  public getUrl(): string {
    return this.path;
  }
}

export default new PublisherToolsPage();
