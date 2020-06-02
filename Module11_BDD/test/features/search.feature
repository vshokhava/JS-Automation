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
    When I click Search button
    Then I should be on Search page
    And Page title should be "<Title>"
    Examples:
    |URL|Text|Title|
    |https://www.epam.com/|testing|Search|
    |https://www.epam.com/|QA     |Search|
