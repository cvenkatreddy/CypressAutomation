class BasePage
{
    getLogin()
    {
        return cy.get('.footer-flex > .signup-login > .button')
    }

    getCurrentUrl()
    {
        return cy.location('href')
    }
}

export default BasePage;
