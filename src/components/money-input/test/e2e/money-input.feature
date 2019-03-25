Feature: Money input feature
  In order to test money input functionality
  As a user
  I want to test whether proper styles are applied for a valid input value

  Scenario: Apply proper styles to money input
    Given a valid money amount value
    Then class .valid is attached to money input container
