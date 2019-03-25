Feature: License plate input feature
  In order to test license plate input functionality
  As a user
  I want to test whether proper styles are applied for a valid input value

  Scenario: Apply proper styles to license plate input
    Given a valid license plate value
    Then class .valid is attached to license plate input container
