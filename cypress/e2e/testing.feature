Feature: Login to Sales account

Scenario: Login with valid credential
Given I open URL SAS
 When I enter tel "11111111"
 And I enter password "123456"
 And I click "Selanjutnya"
 Then Go to Landing Page