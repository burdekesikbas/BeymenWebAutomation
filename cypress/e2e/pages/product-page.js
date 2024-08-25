class ProductPage {



    addBasket(){
        cy.get("[id='addCartBtn']").click();
        return this;
    }

    goToBasket(){
        cy.get("[data-id='1']").click();
        return this;
    }


}



export default ProductPage;