@smoke
Feature: Scrolling
@scroll
Scenario: Scroll to see Footer
    Given I open "https://www.epam.com/" url
    When I wait until page element is visible
    And I scroll to the bottom of the page
    Then I should see Footer

