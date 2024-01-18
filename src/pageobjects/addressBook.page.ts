import { Locators } from "../types/Locators.type";
import Page from "./page";

class AddressBookPage extends Page {
  constructor() {
    super();
  }

  path: string = "account/addresses";

  locators: Locators = {};
}

export default new AddressBookPage();
