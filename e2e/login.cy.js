/// <reference types="Cypress"/>

describe('login test', () => {
    it('visit gallery app', () => {
        cy.visit('/');
        cy.get('a[href="/login"]').click();
        cy.url().should('contain','/login')
    })

    xit('login with valid credentials', () => {
        cy.get('#email').type('sasa.antal94@gmail.com')
        cy.get('#password').type('Salelexasale9944')
        cy.get('button').click()
    })

    xit('login without any credentials',() => {
        cy.get('button').click();
        cy.url().should('include','/login')

    })

xit('login without email', () => {
    cy.get('#password').type('Salelexasale9944');
    cy.get('button').click();
    cy.url().should('include', '/login')

})

it('login without password', () => {
    cy.get('#email').type('Sasa.antal94@gmail.com');
    cy.get('button').click();
    cy.url().should('include', '/login')

})

xit('login without @ in email', () => {
    cy.get('#email').type('Sasa.antal94gmail.com');
    cy.get('#password').type('Salelexasale9944');
    cy.get('button').click();
    

})

xit('login without .com in email', () => {
    cy.get('#email').type('Sasa.antal@94gmail');
    cy.get('#password').type('Salelexasale9944');
    cy.get('button').click();
    

})

    xit('logout test', () => {
        cy.get('.nav-link').should('have.length', 4);
        cy.get('.nav-link').eq(3).click();

    })
})