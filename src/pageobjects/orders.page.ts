import { Locators } from "../types/Locators.type";
import Page from "./page";

class OrdersPage extends Page {
  constructor() {
    super();
  }

  path: string = "account/orders";

  locators: Locators = {};
}

export default new OrdersPage();
