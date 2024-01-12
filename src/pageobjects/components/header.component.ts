import { Locators } from "../../types/Locators.type";
import Page from "../page";

class HeaderComponent extends Page {
  locators: Locators = {
    Logo: "//a[@class='header-logo']",
    "Log In Button": "//button[@aria-label='Log in']",
  };
}

export default new HeaderComponent();
