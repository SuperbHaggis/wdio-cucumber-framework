Feature: drivethrurpg.com Header - Logged In
  Background:
    Given I am on the "Home" page
    When I click on the "Close Button" on the "Welcome Component"
      And I click on the "Log In Button" on the "Header Component"
      And I log in

  Scenario: Menu Dropdown Button is displayed correctly when user is logged in
    Then I should see that the "Log In Button" on the "Header Component" is not displayed      
      And I should see that the "Menu Dropdown Button" on the "Header Component" is displayed
      And I should see that the "Menu Dropdown Button" on the "Header Component" has text "Menu"

  Scenario Outline: My Library Link is displayed correctly and navigates to My Library Page when user is logged in
    Then I should see that the "My Library Link" on the "Header Component" is displayed
      And I should see that the "My Library Link" on the "Header Component" has text "My Library"
    When I click on the "My Library Link" on the "Header Component"
    Then I should be on the "My Library" page

  # OUTDATED
  # Scenario Outline: <page_name> Link is displayed correctly and navigates to <page_name> Page when user is logged in
  #   Then I should see that the "<page_name> Link" on the "Header Component" is displayed
  #     And I should see that the "<page_name> Link" on the "Header Component" has text "<page_name>"
  #   When I click on the "<page_name> Link" on the "Header Component"
  #   Then I should be on the "<page_name>" page
    
  #   Examples:
  #     | page_name       |
  #     | My Library      |
  #     | Publisher Tools |

  Scenario Outline: <page_name> Dropdown Link is displayed correctly and navigates to <page_name> Page when user is logged in
    And I click on the "Menu Dropdown Button" on the "Header Component"
    Then I should see that the "<page_name> Dropdown Link" on the "Header Component" is displayed
      And I should see that the "<page_name> Dropdown Link" on the "Header Component" has text "<page_name>"
    When I click on the "<page_name> Dropdown Link" on the "Header Component"
      And I wait for the page to load
    Then I should be on the "<page_name>" page

    Examples:
      | page_name            |
      | My Account           |
      | Wishlists            |
      | Address Book         |
      | Orders               |
      | My Community Content |
      | Notifications        |

  Scenario: Logo redirects to the Home page when user is logged in
    And I click on the "Logo" on the "Header Component"
    Then I should be on the "Home" page
