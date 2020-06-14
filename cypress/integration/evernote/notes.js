/// <reference types="Cypress" />

import BasePage from '../../support/pageobjects/BasePage'
import LoginPage from '../../support/pageobjects/LoginPage'
import HomePage from '../../support/pageobjects/HomePage'

before(function()
{
    cy.fixture('userdata').then(function(userData)
    {
        this.userData=userData
    })
})

describe('Notes Test Suite', function()
{
    const basePage = new BasePage()
    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(function() 
    {
        cy.visit(Cypress.env('url'))
        basePage.getLogin().click()
        basePage.getCurrentUrl().should('contain', this.userData.loginUrl)

        loginPage.getUserName().type(this.userData.validEmail).should('have.value', this.userData.validEmail)
        loginPage.getContinueButton().click()
        loginPage.getPassword().type(this.userData.validPassword)
        loginPage.getSignInButton().click()
        cy.wait(3000)
        
    })

    it('Create Note', function()
    {   
        homePage.getLoadingIcon().should('not.be.visible')
        homePage.getNewNoteButton().should('be.visible')
        homePage.getNewNoteButton().click() 
        cy.wait(2000)
        homePage.getNotesFrame().then($iframe => {
            const $body = $iframe.contents().find('body')  
            cy.wrap($body).find(homePage.getNotesTitle()).click()
            cy.wrap($body).find(homePage.getNotesTitle()).type("This is a note title")
            cy.wrap($body).find(homePage.getNotesBody()).click()
            cy.wrap($body).find(homePage.getNotesBody()).type("This is a note")
        })
    })

    it('Verify Note', function()
    {   homePage.getLoadingIcon().should('not.be.visible')
        homePage.getLatestCreatedNotesTitle().should('contain', this.userData.noteTitle)
        homePage.getLatestCreatedNotesTimeStamp().should('contain', this.userData.noteTimeStamp)
    })

    afterEach(function()
    {
        cy.wait(3000)
        homePage.getSignOutDropDown().click()
        homePage.getSignOutButton().click()
        homePage.getCurrentUrl().should('contain', this.userData.logOutUrl)
        homePage.getHeader().should('contain', this.userData.logOutMessage)
    })
})

after(function() 
{
    this.userData = null
})