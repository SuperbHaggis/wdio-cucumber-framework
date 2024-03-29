Feature: drivethrurpg.com login
  Background:
    Given I am on the "Home" page
    When I click on the "Close Button" on the "Welcome Component"
      And I click on the "Log In Button" on the "Header Component"

  Scenario: Log in with valid credentials
    When I log in
    Then I should see that the "Log In Button" on the "Header Component" is not displayed

  # Todo: Implement invalid credential scenarios
  # Scenario: Log in with invalid credentials
  #   When I log in with invalid credentials
  #   Then I should see that the "Error Message" on the "Login Component" is displayed
  #     And I should see that the "Error Message" on the "Login Component" has text "Invalid Email or Password"

  # Scenario Outline: Log in with invalid <credential>
  #   When I log in with invalid <credential>
  #   Then I should see that the "Error Message" on the "Login Component" is displayed
  #     And I should see that the "Error Message" on the "Login Component" has text "Invalid Email or Password"

  #   Examples:
  #       | credential  |
  #       | email       |
  #       | password    |
  #       | credentials |

  Scenario: Log out
    When I log in
      And I click on the "Menu Dropdown Button" on the "Header Component"
      # Todo: Fix this step (failing due to button being pressed too quickly)
      And I click on the "Log Out Dropdown Button" on the "Header Component"
    Then I should see that the "Log In Button" on the "Header Component" is displayed
