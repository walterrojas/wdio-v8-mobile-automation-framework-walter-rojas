import {Given, When, Then} from '@wdio/cucumber-framework';
import homeScreen from '../screens/HomeScreen.js';
import shoppingListsScreen from '../screens/ShoppingListsScreen.js';
import shoppingListScreen from '../screens/ShoppingListScreen.js';

async function createNewShoopingLisWithItems(shoppingListName, items){
    await homeScreen.goToShoppingLists()

    await shoppingListsScreen.createNewShoppingList(shoppingListName)

    for (let i = 0; i < items.length; i++) {
        await shoppingListScreen.addItem(items[i])
    }
}

async function updateShoppingListItemsWithUnits(items, units){
    for (let i = 0; i < items.length; i++) {
        await shoppingListScreen.editItemAddingUnits(items[i], units)
    }
}

async function removeItemsFromShoppingList(itemsToRemove){
    for (let i = 0; i < itemsToRemove.length; i++) {
        await shoppingListScreen.removeItem(itemsToRemove[i])
    }
}

async function goToArchiveTab(){
    await homeScreen.createOneNewListView.click()
    await shoppingListsScreen.archivedTab.click()
}

async function deleteCurrentArchiveShoppingList(){
    const origin = await shoppingListsScreen.backToHomeScreenButton

    await browser.action('pointer', {
            parameters: { pointerType: 'touch' }
        })
        .move({duration:10, origin, x:980, y:450})
        .down({button:0})
        .up({button:0})
        .perform(true)

    await shoppingListsScreen.deleteArchivedListButton.click()
    await shoppingListsScreen.deleteShoppingListButtonModal.click()
}

Given(/^user archive a new completed shopping list$/, async () => {
    const shoppingListName = "My shopping list"
    const items = ["Apples","Apricots","Bananas","Blueberries","Cantaloupe","Cherries"]

    await createNewShoopingLisWithItems(shoppingListName, items)

    await updateShoppingListItemsWithUnits(items, "+2")

    const itemsToRemove = ["Cantaloupe+2","Cherries+2"]
    await removeItemsFromShoppingList(itemsToRemove)

    for (let i = 0; i < itemsToRemove.length; i++) {
        const item = await $(`accessibility id:${itemsToRemove[i]}`)
        await expect(item).not.toExist()
    }

    const checkBoxesToComplete = await $$('//android.widget.CheckBox')

    for (let i = 0; i < checkBoxesToComplete.length; i++) {
        const checkBox = checkBoxesToComplete[i]
        await checkBox.click()
    }

    await expect(await $('//android.widget.CheckBox[@checked="false"]')).not.toExist()

    await shoppingListScreen.archiveButton.click()
});

When(/^user deletes the archived list created$/, async () => {
    await goToArchiveTab()
    await deleteCurrentArchiveShoppingList()
});

Then(/^verify the completed shopping list is not archived$/, async () => {
    await expect(shoppingListsScreen.noArchivedListsView).toBeDisplayed()
});

Then(/^verify there are not current shopping lists$/, async () => {
    await shoppingListsScreen.currentTab.click()
    await expect(shoppingListsScreen.noCurrentListsImageView).toBeDisplayed()
});
