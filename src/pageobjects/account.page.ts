import { Locators } from "../types/Locators.type";
import Page from "./page";

class AccountPage extends Page {
  constructor() {
    super();
  }

  path: string = "account/settings";

  locators: Locators = {};
}

export default new AccountPage();
