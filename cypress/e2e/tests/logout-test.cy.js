/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import MyaccountPage from "../pages/myaccount-page";
import HomePage from "../pages/homepage";


describe('Logout Test', () => {

    const loginPage = new LoginPage(); 
    const myaccountPage = new MyaccountPage();
    const homePage = new HomePage();

    it.only('Logout Succsessful', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .controlAccount("Başarıyla giriş yaptınız.")
            .clickLogin();
        myaccountPage.closeAccount();
        homePage.controlMember();
            

    })
   

})
