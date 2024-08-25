/// <reference types="cypress" />
import HomePage from "../pages/homepage";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register";

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11);
    return `user_${randomString}@example.com`;
  }


describe('Register Test', () => {

    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();
    

    it('Register Succsessful', () => {
        const randomEmail = generateRandomEmail(); 

        loginPage.visit()
            .clickLogin();
        registerPage.clickRegister()
            .fillName("Burde")
            .fillSurname("Kesikbaş")
            .fillEmail(randomEmail)
            .fillPassword("Bk.1234567")
            .fillPasswordAgain("Bk.1234567")
            .clickMemberAggrement()
            .clickKvkk()
            .clickSignIn()
            .controlMemberMessage();
    })

    it('Register With Current User', () => {
        loginPage.visit()
            .clickLogin();
        registerPage.clickRegister()
            .fillName("Burde")
            .fillSurname("Kesikbaş")
            .fillEmail("eyima3635@amxyy.com")
            .fillPassword("Bk.1234567")
            .fillPasswordAgain("Bk.1234567")
            .clickMemberAggrement()
            .clickKvkk()
            .clickSignIn()
            .controlErrorRegisterMessage();
    })

    
})
