import addressBookPage from "../pageobjects/addressBook.page";
import homePage from "../pageobjects/home.page";
import myLibraryPage from "../pageobjects/myLibrary.page";
import notificationsPage from "../pageobjects/notifications.page";
import ordersPage from "../pageobjects/orders.page";
import publisherToolsPage from "../pageobjects/publisherTools.page";
import wishlistsPage from "../pageobjects/wishlists.page";
import headerComponent from "../pageobjects/components/header.component";
import loginComponent from "../pageobjects/components/login.component";
import welcomeComponent from "../pageobjects/components/welcome.component";

class PageFactory {
  "Address Book Page" = addressBookPage;
  "Home Page" = homePage;
  "My Library Page" = myLibraryPage;
  "Notifications Page" = notificationsPage;
  "Orders Page" = ordersPage;
  "Publisher Tools Page" = publisherToolsPage;
  "Wishlists Page" = wishlistsPage;
  "Header Component" = headerComponent;
  "Login Component" = loginComponent;
  "Welcome Component" = welcomeComponent;
}

export default new PageFactory();
