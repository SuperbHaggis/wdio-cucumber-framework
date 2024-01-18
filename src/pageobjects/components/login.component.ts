// import { $ } from "@wdio/globals";
import Page from "../page";
import { Locators } from "../../types/Locators.type";
import Utils from "../../utils/Utils";

class LoginComponent extends Page {
  constructor() {
    super();
  }

  locators: Locators = {
    "Modal Window": "//ngb-modal-window",
    "Email Input": "//input[@name='email']",
    "Password Input": "//input[@name='loginPw']",
    "Log In Button": "//form[@id='loginForm']//button[@type='submit']",
    iFrame:
      "//iframe[@src='https://static-preview.drivethrurpg.com/secure-login-dark.html']",
    "Error Message": "//obs-snackbar-notification",
  };

  errorMessageText: string = "Invalid Email or Password";

  public async login(validCredentials: boolean) {
    const credentials: { email: string; password: string } =
      this.getCredentials(validCredentials);

    await this.inputCredentials(credentials);
    await this.clickLoginButton();
    // This method is necessary due to an anti-bot measure that prevents normal login
    await this.clickLoginUntilConditionIsMet(validCredentials);
  }

  getCredentials(validCredentials: boolean) {
    let email: string;
    let password: string;

    if (validCredentials) {
      email = process.env.EMAIL as string;
      password = process.env.PASSWORD as string;
    } else {
      email = "fake@fakemail.com";
      password = "password";
    }

    return { email, password };
  }

  async inputCredentials(credentials: { email: string; password: string }) {
    await Utils.switchToIFrame(this.locators["iFrame"]);
    await $(this.locators["Email Input"]).setValue(credentials.email);
    await $(this.locators["Password Input"]).setValue(credentials.password);
    await browser.switchToFrame(null);
  }
  // Sometimes fails because loop continues despite window being gone
  async clickLoginUntilConditionIsMet(validCredentials: boolean) {
    let condition: boolean = await this.getLoginCondition(validCredentials);

    while (condition) {
      const iFrame = await $(this.locators["iFrame"]);

      if (await iFrame.isDisplayed()) {
        await this.clickLoginButton();
      } else {
        condition = await $(this.locators["Modal Window"]).isDisplayed();
      }
    }
  }

  async getLoginCondition(validCredentials: boolean) {
    const condition: boolean = validCredentials
      ? await $(this.locators["Modal Window"]).isDisplayed()
      : (await $(this.locators["Error Message"]).getText()) !==
        this.errorMessageText;
    return condition;
  }

  async clickLoginButton() {
    await Utils.switchToIFrame(this.locators["iFrame"]);
    const loginButton = await $(this.locators["Log In Button"]);
    if (await loginButton.isDisplayed()) {
      await loginButton.click();
    }
    await browser.switchToFrame(null);
  }
}

export default new LoginComponent();
