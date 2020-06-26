@smoke
Feature: Search
    @so
    @search
    Scenario Outline: Search from Home page
    Given I open "<URL>" url
    When I click Magnifier Glass Icon
    Then I should see Search Input field
    When I click Search Input field
        And I wait "3" seconds
        And I type "<Text>" in Search Input field
    When I wait "3" seconds
        And I click Search button
    Then I should be on Search page
        And Page title should be "<Title>"
    Examples:
    |URL|Text|Title|
    |https://www.epam.com/|testing|Search|
    |https://www.epam.com/|QA     |Search|
    
    @so
    @job
    Scenario Outline: Get results by filling in from for finding a job
    Given I open "https://www.epam.com/" url
    When I wait until page element is visible
        And I click Careers button
        And I wait "3" seconds
        And I wait until Keyword field is clickable
        And I click Keyword field
        And I wait "3" seconds
        And I type "<Term>" in Keyword Input field
        And I wait until Location field is clickable
        And I click Location field
        And I wait "3" seconds
        And I wait until Location dropdown is clickable
        And I click Location dropdown
        And I wait "3" seconds
        And I wait until SearchSubmit button is clickable
        And I click SearchSubmit button
        And I wait until CareersResultsPage is visible
        And I wait "5" seconds
    Then Page title should be "Job Listings"
    Examples:
    |Term|
    |testing|
    |engineer|
    |business analysis|
    
