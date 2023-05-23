@Browser
Feature: This feature will be used to test the login functionality of Simplilearn application

Background: 
    Given I have launched the application
    And I have clicked on Login Link

	@WIP
  Scenario: Validate the Login success scenario
   
    When I enter username
    And I enter password
    And I clck on Login button
    Then I should land on home page

	@Sanity 
  Scenario: Validate the Login failure scenario
   
    When I enter username
    And I enter password
    And I clck on Login button
    Then I should get the error message
	
	@Sanity
  Scenario: Validate the Login failure scenario using parameters
   
    When I enter username as "abc@xyz.com"
    And I enter password as "Abc@1234"
    And I clck on Login button
    Then I should get the error message as "The email or password you have entered is invalid."
	
	@Regression @Sanity
  Scenario Outline: Validate the Login failure scenario using parameters
    
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I clck on Login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName              | Password     | Error                                              |
      | Shivakmr755@gmail.com | Shiveena1705 | The email or password you have entered is invalid. |
      | veenajannu@gmail.com  | Veena315     | The email or password you have entered is invalid. |
      
