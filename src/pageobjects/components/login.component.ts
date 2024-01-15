// import { $ } from "@wdio/globals";
import Page from "../page";
import { Locators } from "../../types/Locators.type";
import Utils from "../../utils/Utils";

class LoginComponent extends Page {
  constructor() {
    super();
  }

  locators: Locators = {
    "Email Input": "//input[@name='email']",
    "Password Input": "//input[@name='loginPw']",
    "Log In Button": "//form[@id='loginForm']//button[@type='submit']",
    iFrame:
      "//iframe[@src='https://static-preview.drivethrurpg.com/secure-login-dark.html']",
    "Error Message": "//obs-snackbar-notification",
  };

  public async login(validCredentials: boolean) {
    let username: string;
    let password: string;

    if (validCredentials) {
      username = process.env.EMAIL as string;
      password = process.env.PASSWORD as string;
    } else {
      username = "fake@fakemail.com";
      password = "password";
    }

    await Utils.switchToIFrame(this.locators["iFrame"]);

    await $(this.locators["Email Input"]).setValue(username);
    await $(this.locators["Password Input"]).setValue(password);

    await $(this.locators["Log In Button"]).click();
    // This second click is for circumventing a possible anti-bot measure that prevents login
    await $(this.locators["Log In Button"]).click();

    await browser.switchToFrame(null);
  }
}

export default new LoginComponent();
