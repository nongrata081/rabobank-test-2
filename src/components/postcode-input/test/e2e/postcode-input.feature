Feature: Postcode input feature
  In order to test postcode input functionality
  As a user
  I want to test whether proper styles are applied for a valid input value

  Scenario: Apply proper styles to postcode input
    Given a valid postcode value
    Then class .valid is attached to postcode input container
