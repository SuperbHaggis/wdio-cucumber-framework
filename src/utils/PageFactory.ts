import headerComponent from "../pageobjects/components/header.component";
import homePage from "../pageobjects/home.page";
import loginComponent from "../pageobjects/components/login.component";
import welcomeComponent from "../pageobjects/components/welcome.component";

class PageFactory {
  "Home page" = homePage;
  "Login component" = loginComponent;
  "Header component" = headerComponent;
  "Welcome component" = welcomeComponent;
}

export default new PageFactory();
