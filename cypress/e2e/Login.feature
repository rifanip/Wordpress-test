Feature: Negative Cases for Login

Background:
    Given I am on the login page

  Scenario: Logging in with incorrect credentials
    When I input the phone number "11111111"
    And I input the password "wrongpassword"
    And I click the "Selanjutnya" button
    Then I should see an error message "Password yang Anda masukkan salah."

  Scenario: Logging in with empty phone number and password
    When I click "Selanjutnya" button without entering any credentials
    Then I should see an error message "No. Telepon wajib diisi"

  Scenario: Logging in with empty password
    When I input the phone number "12345678"
    And I click "Selanjutnya" button
    Then I should see an error message "Password wajib diisi"