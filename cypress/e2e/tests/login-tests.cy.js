/// <reference types="cypress" />
import LoginPage from "../pages/login-page";

describe('Login Test', () => {

    const loginPage = new LoginPage();

    it('Login Succsessful', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .controlAccount("Başarıyla giriş yaptınız.");
    })

    it('Login With Wrong Email', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .errorMessageDisplayedControl("E-mail veya şifre bilgileriniz hatalı.");
    })

    it('Login With Wrong Password', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("b12345")
            .clickLoginButton()
            .errorMessageDisplayedControl("E-mail veya şifre bilgileriniz hatalı.");

    })

    it('Login RequiredControl', () => {
        loginPage.visit()
            .clickLogin()
            .clickLoginButton()
            .errorMessageControl();

    })

    it('Invalid Email', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .errorMessageDisplayedControl("E-mail veya şifre bilgileriniz hatalı.");

    })

    it('Login passwordMaxKarakter', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("1111111111111111111111111111111111111111111111111111111111111111111111111")
            .clickLoginButton()
            .errorMessageDisplayedControl("E-mail veya şifre bilgileriniz hatalı.");
    })
})
