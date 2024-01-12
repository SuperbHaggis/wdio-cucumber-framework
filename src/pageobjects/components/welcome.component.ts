import { Locators } from "../../types/Locators.type";
import Page from "../page";

class WelcomeComponent extends Page {
  locators: Locators = {
    "Close Button": "//ngb-modal-window//button[@aria-label='close']",
  };
}

export default new WelcomeComponent();
