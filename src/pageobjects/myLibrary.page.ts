import { Locators } from "../types/Locators.type";
import Page from "./page";

class MyLibraryPage extends Page {
  constructor() {
    super();
  }

  path: string = "mylibrary";

  locators: Locators = {};
}

export default new MyLibraryPage();
