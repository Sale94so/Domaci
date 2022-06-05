describe('Register test', () => {
    it('visit gallery app register page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/register');
        cy.get('a[href="/register"]').click();
        cy.url().should('contain','/register')
    }
)

xit('password < 8 characters', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale1221@gmail.com')
    cy.get('#password').type('sale123')
    cy.get('#password-confirmation').type('sale123')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})


xit('email without @', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale1221gmail.com')
    cy.get('#password').type('sale123123')
    cy.get('#password-confirmation').type('sale123123')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})


xit('email without .com', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale1221@gmail')
    cy.get('#password').type('sale123123')
    cy.get('#password-confirmation').type('sale123123')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})

xit('different password', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale12221@gmail.com')
    cy.get('#password').type('sale12312223')
    cy.get('#password-confirmation').type('sale123123')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})

xit('empty first name', () => {
    cy.get('#first-name').type('  ')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale141s@gmail.com')
    cy.get('#password').type('11111111')
    cy.get('#password-confirmation').type('11111111')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})

xit('empty last name', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('  ')
    cy.get('#email').type('sale141s@gmail.com')
    cy.get('#password').type('11111111')
    cy.get('#password-confirmation').type('11111111')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})

xit('password with 8 spaces', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale1412s@gmail.com')
    cy.get('#password').type('        ')
    cy.get('#password-confirmation').type('        ')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})
xit('without check terms and condition', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale1412fs@gmail.com')
    cy.get('#password').type('444446666')
    cy.get('#password-confirmation').type('444446666')
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})

xit('succsessful register', () => {
    cy.get('#first-name').type('sale')
    cy.get('#last-name').type('sale')
    cy.get('#email').type('sale14192s@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})
})