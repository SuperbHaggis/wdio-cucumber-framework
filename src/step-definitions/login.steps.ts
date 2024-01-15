import { When } from "@wdio/cucumber-framework";

import loginPage from "../pageobjects/components/login.component";

When(/^I log in( with invalid credentials)?$/, async (invalid: string) => {
  const validCredentials = !invalid;
  await loginPage.login(validCredentials);
});
