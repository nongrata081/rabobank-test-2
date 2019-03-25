Feature: Form feature
  In order to test form functionality
  As a user
  I want to test whether form is submittable when provided valid input

  Scenario: Make form submittable
    Given a valid input of multiple input component
    Then remove attribute disabled from submit button
