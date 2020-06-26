@smoke
@navigation
Feature: Pages Navigation

    Scenario: Opening 'Insights' page
    Given I open "https://www.epam.com/" url
    When I wait until page element is visible
        And I click Insights button
        And I wait "3" seconds
    Then Page title should be "Discover our Latest Insights | EPAM"
        And Page title should not be "Job Listings"

    Scenario: Opening 'About' page
    Given I open "https://www.epam.com/about" url
    When I wait until page element is visible
    Then Page title should be "One of the Fastest-Growing Public Tech Companies | About EPAM"
        And Page title should not be "About"

    Scenario: Opening 'Our Work' page from Global header of another page
    Given I open "https://www.epam.com/how-we-do-it/remote-by-design#latest" url
    When I wait until page element is visible
    Then Page title should be "Our Remote Work & Managed Services Solutions | EPAM" 
    When I click Our Work button
        And I wait "3" seconds
    Then Page title should not be "Our Remote Work & Managed Services Solutions | EPAM"
        And Page title should be "Explore our Work | EPAM Customer Stories, Brochures & Accelerators"

