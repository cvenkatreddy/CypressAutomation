/// <reference types="Cypress" />
import { baseURL } from '../../../cypress';

describe('User API Suite', () => {

    it('List Users', () => {
        cy.request('GET', `${baseURL}/users`).then(function(response) {
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property("content-type","application/json; charset=utf-8")
        })
    })
 
    it('Single user not found', () => {
        cy.request({ 
            method: 'GET', 
            url: `${baseURL}/users/25` , 
            failOnStatusCode: false })
            .then(function(response) {
                expect(response.status).to.eq(404, { failOnStatusCode: false })
        })
    })
})
 