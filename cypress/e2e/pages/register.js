class RegisterPage {


    clickRegister(value) {
        cy.get("[class='btn-yellow memberQuestionBtn']").click();
        return this;
    }

    fillName(value) {
        cy.get("[name='name']").type(value, { delay: 100 });
        return this;
    }

    fillSurname(value) {
        cy.get("[name='surname']").type(value, { delay: 100 });
        return this;
    }

    fillEmail(value) {
        cy.get("[name='email']").type(value, { delay: 100 });
        return this;
    }

    fillPassword(value) {
        cy.get("[name='password']").type(value, { delay: 100 });
        return this;
    }

    fillPasswordAgain(value) {
        cy.get(" [name='password_again']").type(value, { delay: 100 });
        return this;
    }
    clickMemberAggrement(index) {
        cy.get("[class='fl input-wrap checkbox']").eq(2).click();
        return this;
    }

    clickKvkk() {
        cy.get("[class='fl input-wrap checkbox']").eq(2).click({ delay: 300 });
        return this;
    }
    
    
    clickSignIn() {
        cy.get("[id='uye-kayit-btn']").click({ delay: 300 });
        return this;
    }



    controlMemberMessage(value) {
        cy.get("[id='memberApprove']").should('contain.text', 'Üyeliğin tamamlandı!');
        return this;
    }

    controlErrorRegisterMessage(value) {
        cy.get("[class='tooltip btn-danger']").should('contain.text', 'Bu e-posta adresiyle kayıt yapılmıştır. Lütfen giriş yapınız.');
        return this;
    }

    

}

export default RegisterPage;