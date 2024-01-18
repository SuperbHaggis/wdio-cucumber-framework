Feature: drivethrurpg.com Header - Logged Out
  Background:
    Given I am on the "Home" page
    When I click on the "Close Button" on the "Welcome Component"

  Scenario: Header elements displayed correctly when user is not logged in
    Then I should see that the "Logo" on the "Header Component" is displayed
      And I should see that the "Log In Button" on the "Header Component" is displayed
      And I should see that the "Menu Dropdown Button" on the "Header Component" is not displayed

  Scenario: Logo redirects to the Home page when user is not logged in
    And I click on the "Logo" on the "Header Component"
    Then I should be on the "Home" page