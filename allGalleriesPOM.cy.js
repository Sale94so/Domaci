import { AllGalleriesPage } from '../page_objects/allGalleriesPage';

describe('all Galleries POM', () => {
    const searchField = {
        search: 'something'
    }
})

before('all Galleries Page', () => {
    cy.visit('/');
    cy.get('.form-control').type('nesto');
    cy.get('.input-button').click();
})

it('POM all galleries page', () => {
    
    
  }  )
