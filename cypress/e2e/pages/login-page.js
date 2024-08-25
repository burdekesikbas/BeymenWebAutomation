class LoginPage {

    visit() {
        cy.visit("https://www.nezih.com.tr/");
        return this;
    }
    
    clickLogin() {
        cy.get("[class='member-drop drop-open']").click({ delay: 300 });
        return this;
    }

    fiilEmail(value) {
        cy.get("[id='ug-email']").type(value, { delay: 300 });
        return this;
    }

    fiilPassword(value) {
        cy.get("[id='ug-password']").type(value, { delay: 100 });
        return this;
    }

    clickLoginButton() {
        cy.get("[id='member-login-btn']").click();
        return this;
    }

    controlAccount(value) {
        cy.get("[class='tooltip btn-success']").should('have.text', value);
        return this;
    }

    errorMessageDisplayedControl(value) {
        cy.get("[class='tooltip btn-danger']").should('have.text', value);
        return this;
    }

    errorMessageControl() {
        cy.get("[class='tooltip btn-danger']").should('contain.text', 'Giriş bilgileriniz hatalı.');
        return this;
    }

}

export default LoginPage;