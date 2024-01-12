import { Locators } from "../types/Locators.type";
import Page from "./page";

class HomePage extends Page {
  constructor() {
    super();
  }

  path: string = "";

  locators: Locators = {};
}

export default new HomePage();
