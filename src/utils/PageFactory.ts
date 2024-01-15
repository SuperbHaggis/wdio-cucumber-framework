import headerComponent from "../pageobjects/components/header.component";
import homePage from "../pageobjects/home.page";
import loginComponent from "../pageobjects/components/login.component";
import welcomeComponent from "../pageobjects/components/welcome.component";

class PageFactory {
  "Home Page" = homePage;
  "Login Component" = loginComponent;
  "Header Component" = headerComponent;
  "Welcome Component" = welcomeComponent;
}

export default new PageFactory();
