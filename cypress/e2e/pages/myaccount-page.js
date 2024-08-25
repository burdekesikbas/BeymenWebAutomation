class MyaccountPage {

    closeAccount() {
        cy.get("[class='logout memberCenterBtn']").click();
        return this;
    }

}

export default MyaccountPage;