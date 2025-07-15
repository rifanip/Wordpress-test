Feature: Wholesale pricing in cart

  Background:
    Given I visit the site "http://localhost/wordpress-test/"
    And I log in as wholesale customer

  Scenario: Verify product price for wholesale user
    When I open the product page "http://localhost/wordpress-test/index.php/product/test-product-hani/"
    Then I should see wholesale price "30.000"

    When I add the product to the cart
    And I go to the cart page "/cart"
    Then I should see wholesale price in cart is "Rp30.000"