Feature: drivethrurpg.com login
  Scenario: Log in with valid credentials
    Given I am on the Home page
    When I click on the Close Button on the Welcome component
      And I click on the Log In Button on the Header component
      And I log in
    Then I should see that the Log In Button on the Header component is not displayed
