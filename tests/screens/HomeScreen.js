class HomeScreen {

    get showMenuButton(){
        return $('accessibility id:Show menu')
    }

    get archiveListSubMenuButton(){
        return $('accessibility id:Archive list')
    }

    get noListSelectedImageView(){
        return $('accessibility id:No list is selected, create one.')
    }

    get createOneNewListView(){
        return $('accessibility id:No list selected')
    }

    async goToShoppingLists(){
        await(await this.createOneNewListView).waitForDisplayed({timeout: 60000})
        await this.createOneNewListView.click()
    }
}

export default new HomeScreen()