Feature: Example feature
	In order to test wdio configuration
	As a developer
	I want to test whether I can access the running stencil dev server

	Scenario: Default placeholder
		Given a running stencil app
		Then I see the "Rabobank assignment" header
