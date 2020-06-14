
class LoginPage
{    
    getUserName()
    {
        return cy.get('#username')
    }
    
    getContinueButton()
    {
        return cy.get('#submitRow').click()
    
    }
    getPassword()
    {
      return  cy.get('#password')
    }

    getSignInButton()
    {
       return cy.get('#loginButton')
    }
    getErrorMessage()
    {
        return  cy.get('.error-status.FieldState-message.FieldState_error-message')
    }    
}
    
export default LoginPage;
    