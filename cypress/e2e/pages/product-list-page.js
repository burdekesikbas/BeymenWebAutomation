class ProductListPage {

    firstProductClick(index){
        cy.get("[class='col col-12 productItem']").eq(0).click();
        return this;
    }

   
}



export default ProductListPage;