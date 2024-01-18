import { Locators } from "../types/Locators.type";
import Page from "./page";

class WishlistsPage extends Page {
  constructor() {
    super();
  }

  path: string = "account/wishlists";

  locators: Locators = {};
}

export default new WishlistsPage();
