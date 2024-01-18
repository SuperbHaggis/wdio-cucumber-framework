import { Locators } from "../../types/Locators.type";
import Page from "../page";

class HeaderComponent extends Page {
  locators: Locators = {
    Logo: "//a[@href='/']",
    "Log In Button": "//button[@aria-label='Log in']",
    "Menu Dropdown Button": "//button[@id='accountMenuDropdownButton']",
    "My Account Dropdown Link":
      "//div[contains(@class, 'dropdown-menu')]//a[@href='/en/account/settings']",
    "Wishlists Dropdown Link":
      "//div[contains(@class, 'dropdown-menu')]//a[@href='/en/account/wishlists']",
    "Address Book Dropdown Link":
      "//div[contains(@class, 'dropdown-menu')]//a[@href='/en/account/addresses']",
    "Orders Dropdown Link":
      "//div[contains(@class, 'dropdown-menu')]//a[@href='/en/account/orders']",
    "Notifications Dropdown Link":
      "//div[contains(@class, 'dropdown-menu')]//a[@href='/en/account/inbox']",
    "Log Out Dropdown Button": "//button[@aria-label='Log Out']",
    "My Library Link":
      "//div[@class='site-header-menu']//a[@href='/en/mylibrary']",
    "Publisher Tools Link": "//a[@href='/en/partner-tools']",
  };
}

export default new HeaderComponent();
