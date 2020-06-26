@smoke
@scroll
Feature: Scrolling
    Scenario: Scroll to see Footer on main page
    Given I open "https://www.epam.com/" url
    When I wait until page element is visible
        And I scroll to the bottom of the page
    Then I should see Footer

    @so
    Scenario Outline: Verify that Footer is displayed on all pages
    Given I open "<URL>" url
    When I wait until page element is visible
        And I scroll to the bottom of the page
    Then I should see Footer
    Examples:
    |URL|
    |https://www.epam.com/our-work|
    |https://www.epam.com/what-we-do|
    |https://www.epam.com/careers/job-listings?query=QA&country=Belarus&city=Minsk|
    |https://www.epam.com/search?q=Blockchain|


