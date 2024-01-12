import { When } from "@wdio/cucumber-framework";

import loginPage from "../pageobjects/components/login.component";

When(/^I log in$/, async () => {
  await loginPage.login();
});
