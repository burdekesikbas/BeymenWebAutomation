class BasketPage {

    controlBasket(value) {
        cy.get("[class='fl col-12 pageTitle']").should('have.text', value);
        return this;
    }

    deleteBasket(value) {
        cy.get("[class='cartBtns btn-white']").eq(1).click();
        return this;
    }
    
    deleteBasketControl(value) {
        cy.get("[id='cartEmpty']").should('contain.text', 'Sepetin boş!').click();
        return this;
    }
    
}



export default BasketPage;