describe('create Gallery POM', () => {
   let title = 'Nesto'
   let description = 'Nesto2'
   let images = 'https://commons.wikimedia.org/wiki/File:Cute_dog.jpg'
    


before('all Galleries Page', () => {
    cy.visit('/');
    cy.get('a[href="/login"]').click();
    cy.get('#email').type('sasa.antal94@gmail.com')
    cy.get('#password').type('Salelexasale9944')
    cy.get('button').click()
})

it('POM create gallery', () => {
    cy.get('a[href="/create"]').click();
    cy.get('#title').type(title)
    cy.get('#description').type(description)
    cy.get('[type="url"]').type(images);
    cy.get('button[type=submit]').eq(0).click()
    
    
})

})
