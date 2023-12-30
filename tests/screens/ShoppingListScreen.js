class ShoppingListScreen {

    get plusButton(){
        return $('//android.widget.Button[@index!=1]')
    }

    get newItemAddButtonModal(){
        return $('accessibility id:ADD')
    }

    get editItemButton(){
        return $('accessibility id:EDIT')
    }

    get saveItemButton(){
        return $('accessibility id:SAVE')
    }

    get removeItemButton(){
        return $('accessibility id:REMOVE')
    }

    get archiveButton(){
        return $('accessibility id:ARCHIVE')
    }

    async addItem(item){
        await this.plusButton.click()

        let itemAsArray = [...item]
        await browser.keys(itemAsArray)

        await this.newItemAddButtonModal.click()
    }

    async editItemAddingUnits(itemAccessibilityId, units){
        const item = await $(`accessibility id:${itemAccessibilityId}`)
        await item.click()

        await this.editItemButton.click()

        let unitsAsArray = [...units]
        await browser.keys(unitsAsArray)
        await driver.hideKeyboard()

        await this.saveItemButton.click()
    }

    async removeItem(itemAccessibilityId){
        const item = await $(`accessibility id:${itemAccessibilityId}`)
        await item.click()

        await this.removeItemButton.click()
    }

}

export default new ShoppingListScreen()