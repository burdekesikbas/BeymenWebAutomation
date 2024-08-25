/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/homepage";
import ProductListPage from "../pages/product-list-page";
import ProductPage from "../pages/product-page";
import BasketPage from "../pages/basketpage";



describe('Basket Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productListPage = new ProductListPage();
    const productPage = new ProductPage();
    const basketPage = new BasketPage();

    it('Add To Product With Search Button', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .controlAccount("Başarıyla giriş yaptınız.");
        homePage.closeNotification()
            .hideImage()
            .fiilSearch("Kitap");
        productListPage.firstProductClick();
        productPage.addBasket()
            .goToBasket();
        basketPage.controlBasket("Sepetim");

    })

    it('Add To Product With Search And Press Enter', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .controlAccount("Başarıyla giriş yaptınız.");
        homePage.closeNotification()
            .hideImage()
            .fillSearchAndPressEnter("Kalem");
        productListPage.firstProductClick();
        productPage.addBasket()
            .goToBasket();
        basketPage.controlBasket("Sepetim");

    })

    it('Delete To Project', () => {
        loginPage.visit()
            .clickLogin()
            .fiilEmail("heyima3635@amxyy.com")
            .fiilPassword("Bk.1234567")
            .clickLoginButton()
            .controlAccount("Başarıyla giriş yaptınız.");
        homePage.closeNotification()
            .clickBasket();
        basketPage.deleteBasket()
            .deleteBasketControl();

    })

})
