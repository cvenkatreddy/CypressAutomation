/// <reference types="Cypress" />
import { baseURL } from '../../../cypress';

describe('Register API Suite', function() 
{
    it('Successful registration',function() {
        cy.request({
            url: `${baseURL}/register`,
            method: 'POST',
            body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            })
            .then(function(response) {
                expect(response.body).to.have.property("token","QpwL5tke4Pnpja7X4")
                expect(response.body).to.have.property("id",4)
                expect(response.status).to.eq(200)
        })
    })
    
    it('Unsuccessful registration',function() {
        cy.request({
            url: `${baseURL}/register`,
            method: 'POST',
            body: {
                    "email": "sydney@fife"
                },
            failOnStatusCode: false
            })
            .then(function(response) {
                expect(response.body).to.have.property("error","Missing password")
                expect(response.status).to.eq(400)
        })
    })
})