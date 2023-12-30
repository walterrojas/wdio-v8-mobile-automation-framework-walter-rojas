class ShoppingListsScreen {

    get backToHomeScreenButton(){
        return $('//android.widget.Button[@content-desc="Back"]')
    }

    get currentTab(){
        return $('//android.view.View[@content-desc="Current\nTab 1 of 2"]')
    }

    get archivedTab(){
        return $('//android.view.View[@content-desc="Archived\nTab 2 of 2"]')
    }

    get deleteArchivedListButton(){
        return $('//android.widget.Button[@content-desc="Delete"]')
    }

    get deleteShoppingListButtonModal(){
        return $('accessibility id:DELETE')
    }

    get newListButton(){
        return $('accessibility id:NEW LIST')
    }

    get noCurrentListsImageView(){
        return $('accessibility id:There are no current lists, create one!')
    }

    get noArchivedListsView(){
        return $('accessibility id:There are no archived lists.')
    }

    get newShoppingListModal(){
        return $('accessibility id:Add new shopping list')
    }

    get newShoppingListAddButtonModal(){
        return $('accessibility id:ADD')
    }

    async createNewShoppingList(shoppingListName){
        await(await this.newListButton).waitForDisplayed({timeout: 60000})
        await this.newListButton.click()

        await(await this.newShoppingListModal).waitForDisplayed({timeout: 60000})
        const shoppingListNameAsArray = [...shoppingListName]
        await browser.keys(shoppingListNameAsArray)

        await(await this.newShoppingListAddButtonModal).waitForDisplayed({timeout: 60000})
        await this.newShoppingListAddButtonModal.click()
    }
}

export default new ShoppingListsScreen()