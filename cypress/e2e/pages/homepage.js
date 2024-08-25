class HomePage {

    closeNotification() {
        cy.get("[class='tsoft-push--in-notification-button tsoft-push--in-disallow-button']").click();
        return this;
    }

    fiilSearch(value) {
        cy.get("[id='live-search']").type(value, { delay: 100 });
        cy.get("[id='searchBtn']").click({ delay: 500 });
        return this;
    }

    fillSearchAndPressEnter(value) {
        cy.get("[id='live-search']").clear();
        cy.get("[id='live-search']").type(value + "{enter}", { delay: 100 });
        return this;
    }

    clickBasket() {
        cy.get("[id='cart-soft-count']").click();
        return this;
    }

    controlMember(value) {
        cy.get("[class='member-drop drop-open']").should('contain.text', 'Üyelik');
        return this;
    }
    
    hideImage(){
        cy.get('img[src*="endbag%20%2540.jpg"]').should('be.visible').invoke('attr', 'style', 'display: none;'); // Resmi gizler
        return this;
    }
    


}

export default HomePage;