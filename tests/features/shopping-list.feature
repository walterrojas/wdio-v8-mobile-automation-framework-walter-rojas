Feature: Shopping List

  Scenario: User can delete an archive completed shopping list

    Given user archive a new completed shopping list
    When user deletes the archived list created
    Then verify the completed shopping list is not archived
    Then verify there are not current shopping lists