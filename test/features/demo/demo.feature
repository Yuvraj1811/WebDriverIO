Feature: Demo Feature

  
  Scenario Outline: Run first demo feature
    Given Google page is open
    When Search with <SearchItem>
    Then Click on first search result
    Then Url should match <ExpectedURL>

    Examples: 
      | TestID     | SearchItem | ExpectedURL         |
      | Demo_TC001 | WDIO       | https://webdriver.io/ |
