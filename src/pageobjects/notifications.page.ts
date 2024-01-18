import { Locators } from "../types/Locators.type";
import Page from "./page";

class NotificationsPage extends Page {
  constructor() {
    super();
  }

  path: string = "account/inbox";

  locators: Locators = {};
}

export default new NotificationsPage();
