Feature: Vehicle Listing Page

Scenario: Searching for a Vehicle
    Given User is in the vehicle listing page
    When User click search box in vehicle page
    and type the "mazda 2"
    and user click blue search button
    Then user's specified vehicle name will appear in the dropdown menu