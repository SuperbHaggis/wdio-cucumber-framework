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
  };

  public async login() {
    const username = process.env.EMAIL as string;
    const password = process.env.PASSWORD as string;

    await Utils.switchToIFrame(this.locators["iFrame"]);

    await $(this.locators["Email Input"]).setValue(username);
    await $(this.locators["Password Input"]).setValue(password);
    await $(this.locators["Log In Button"]).click();
  }
}

export default new LoginComponent();
