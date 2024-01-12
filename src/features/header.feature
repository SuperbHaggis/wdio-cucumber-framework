Feature: drivethru.com header
  Scenario: Logo redirects to the Home page
    Given I am on the Home page
    When I click on the Logo element on the Header component
    Then I should be on the Home page