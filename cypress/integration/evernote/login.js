/// <reference types="Cypress" />

import BasePage from '../../support/pageobjects/BasePage'
import LoginPage from '../../support/pageobjects/LoginPage'
import HomePage from '../../support/pageobjects/HomePage'

describe('Login Test Suite', function()
{
    const basePage = new BasePage()
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    
    beforeEach(function() 
    {
        cy.fixture('userdata').then(function(userData)
        {
            this.userData=userData
        })
        cy.visit(Cypress.env('url'))
        basePage.getLogin().click()
    })

    it('Login Test with invalid credentials', function()
    {
        loginPage.getUserName().type(this.userData.invalidEmail).should('have.value', this.userData.invalidEmail)
        loginPage.getContinueButton().click()
        loginPage.getPassword().type(this.userData.invalidPassword)
        loginPage.getSignInButton().click()
        loginPage.getErrorMessage().contains(this.userData.errorMessage)
    })

    it('Login Test with valid credentials', function()
    {    
        basePage.getCurrentUrl().should('contain', this.userData.loginUrl)
        loginPage.getUserName().type(this.userData.validEmail).should('have.value', this.userData.validEmail)
        loginPage.getContinueButton().click()
        loginPage.getPassword().type(this.userData.validPassword)
        loginPage.getSignInButton().click()
        Cypress.config('defaultCommandTimeout', 2000)
        homePage.getLoadingIcon().should('not.be.visible')
        homePage.getToolTipMark().should('be.visible')
        homePage.getToolTipMarkClose().click()
        homePage.getNewNoteButton().should('be.visible')
    })

    after(function() 
    {
        homePage.getSignOutDropDown().click()
        homePage.getSignOutButton().click()
        homePage.getCurrentUrl().should('contain', this.userData.logOutUrl)
        homePage.getHeader().should('equal', this.userData.logOutMessage)
    })
   
})